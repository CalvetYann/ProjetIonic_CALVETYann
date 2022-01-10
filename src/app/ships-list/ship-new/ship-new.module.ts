import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipNewPageRoutingModule } from './ship-new-routing.module';

import { ShipNewPage } from './ship-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipNewPageRoutingModule
  ],
  declarations: [ShipNewPage]
})
export class ShipNewPageModule {}
