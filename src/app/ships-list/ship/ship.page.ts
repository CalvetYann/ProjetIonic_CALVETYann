import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.page.html',
  styleUrls: ['./ship.page.scss'],
})
export class ShipPage implements OnInit {
  edit: boolean = false;
  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async editShip() {
    if(!this.edit) {
      const alert = await this.alertCtrl.create({
        header: 'Are you sure to edit this ship?',
        subHeader: 'Ship will be editable',
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

    } else {
      this.edit = !this.edit;
    }
  }

}
