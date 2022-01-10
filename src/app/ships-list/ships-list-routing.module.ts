import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipsListPage } from './ships-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShipsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./ship-new/ship-new.module').then( m => m.ShipNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./ship/ship.module').then( m => m.ShipPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipsListPageRoutingModule {}
