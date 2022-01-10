import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipsListPageRoutingModule } from './ships-list-routing.module';

import { ShipsListPage } from './ships-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipsListPageRoutingModule
  ],
  declarations: [ShipsListPage]
})
export class ShipsListPageModule {}
