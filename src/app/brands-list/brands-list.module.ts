import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandsListPageRoutingModule } from './brands-list-routing.module';

import { BrandsListPage } from './brands-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandsListPageRoutingModule
  ],
  declarations: [BrandsListPage]
})
export class BrandsListPageModule {}
