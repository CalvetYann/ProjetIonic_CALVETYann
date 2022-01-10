import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandNewPageRoutingModule } from './brand-new-routing.module';

import { BrandNewPage } from './brand-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandNewPageRoutingModule
  ],
  declarations: [BrandNewPage]
})
export class BrandNewPageModule {}
