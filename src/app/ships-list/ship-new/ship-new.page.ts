import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Ships } from 'src/app/models/ships.model';
import { ShipsService } from 'src/app/ships.service';

@Component({
  selector: 'app-ship-new',
  templateUrl: './ship-new.page.html',
  styleUrls: ['./ship-new.page.scss'],
})
export class ShipNewPage implements OnInit {
  public ship!: Ships;

  constructor(
    private Ship: ShipsService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.ship = new Ships();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Ship successfully added!',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['tabs/ships']);
      }, 2000);
    });
  }

  add() {
    this.Ship.addShip(this.ship).subscribe(() => {
      this.ship = new Ships();
      this.presentToast();
    });
  }

}
