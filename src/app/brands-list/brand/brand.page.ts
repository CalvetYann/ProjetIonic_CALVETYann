import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BrandsService } from 'src/app/brands.service';
// import { SocialSharing } from '@awesome-cordova-plugins/social-sharing';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {
  edit!: boolean;
  segment!: string;
  brand: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private Brands: BrandsService,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.edit = false;
    this.segment = 'view';
    const id = this.route.snapshot.paramMap.get('id');
    this.Brands.getBrand(id).subscribe((data: any) => {
      this.brand = data;
    });
  }

  async share() {
    await Share.share({
      title: this.brand.brandName,
      text: this.brand.brandDesc,
      url: 'http://localhost:8100/tabs/brands/' + this.brand.id,
      dialogTitle: 'Share this brand'
    });
  }

  async setEditable() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure to edit this brand?',
      subHeader: 'Brand will be editable',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Confirm',
          handler: () => { this.edit = !this.edit; }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    (await toast).present();
  }

  onEdit() {
    this.Brands.updateBrand(this.brand).subscribe(() => {
      this.presentToast('Brand successfully updated!');
      this.segment = 'view';
    });
  }

  async confirmDelete(id: any) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure to delete this brand?',
      subHeader: 'This action is irreversible',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Confirm',
          handler: () => { this.onDelete(id); }
        }
      ]
    });

    await alert.present();
  }

  onDelete(id: any) {
    this.Brands.deleteBrand(id);
    this.presentToast('Brand successfully deleted!');
    this.router.navigate(['/tabs/brands']);
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'edit') {
      this.setEditable();
    } else {
      this.edit = !this.edit;
    }
  }

}
