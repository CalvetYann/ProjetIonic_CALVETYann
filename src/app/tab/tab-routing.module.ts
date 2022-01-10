import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [

  {
    path: 'tabs',
    component: TabPage,

    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'ships',
        loadChildren: () => import('../ships-list/ships-list.module').then(m => m.ShipsListPageModule),
      },
      {
        path: 'brands',
        loadChildren: () => import('../brands-list/brands-list.module').then( m => m.BrandsListPageModule)
      }
    ]
  },
{
  path: '',
  redirectTo:'/tabs/home',
  pathMatch:'full'
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
