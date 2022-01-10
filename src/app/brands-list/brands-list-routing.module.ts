import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsListPage } from './brands-list.page';

const routes: Routes = [
  {
    path: '',
    component: BrandsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./brand-new/brand-new.module').then( m => m.BrandNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./brand/brand.module').then( m => m.BrandPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsListPageRoutingModule {}
