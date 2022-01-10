import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandNewPage } from './brand-new.page';

const routes: Routes = [
  {
    path: '',
    component: BrandNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandNewPageRoutingModule {}
