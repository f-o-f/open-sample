import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/goods', pathMatch: 'full' },
  { path: 'goods', component: MenuComponent },
  { path: 'goods/create', component: GoodsCreateComponent },
  { path: 'goods/list', component: GoodsListComponent},
   { path: 'goods/:id', component: GoodsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
