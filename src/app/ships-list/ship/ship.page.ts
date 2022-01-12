import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ShipsService } from 'src/app/ships.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.page.html',
  styleUrls: ['./ship.page.scss'],
})
export class ShipPage implements OnInit {
  edit!: boolean;
  segment!: string;
  ship: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private Ships: ShipsService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.edit = false;
    this.segment = 'view';
    const id = this.route.snapshot.paramMap.get('id');
    this.Ships.getShip(id).subscribe((data: any) => {
      this.ship = data;
    });
  }

  async setEditable() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure to edit this ship?',
      subHeader: 'Ship will be editable',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { this.segment = 'view'; }
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
    this.Ships.updateShip(this.ship).subscribe(() => {
      this.presentToast('Ship updated successfully');
      this.segment = 'view';
    });
  }

  onDelete(id: any) {
    this.Ships.deleteShip(id);
    this.presentToast('Ship deleted successfully');
    this.router.navigate(['/ships']);
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'edit') {
      this.setEditable();
    } else {
      this.edit = false;
    }
  }

}
