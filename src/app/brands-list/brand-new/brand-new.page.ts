import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BrandsService } from 'src/app/brands.service';
import { Brands } from 'src/app/models/brands.model';

@Component({
  selector: 'app-brand-new',
  templateUrl: './brand-new.page.html',
  styleUrls: ['./brand-new.page.scss'],
})
export class BrandNewPage implements OnInit {
  public brand!: Brands;

  constructor(
    private Brand: BrandsService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.brand = new Brands();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Brand successfully added!',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['tabs/brands']);
      }, 2000);
    });
  }

  add() {
    this.Brand.addBrand(this.brand).subscribe(() => {
      this.brand = new Brands();
      this.presentToast();
    });
  }

}
