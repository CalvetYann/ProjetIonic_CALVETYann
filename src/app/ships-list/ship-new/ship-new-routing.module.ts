import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipNewPage } from './ship-new.page';

const routes: Routes = [
  {
    path: '',
    component: ShipNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipNewPageRoutingModule {}
