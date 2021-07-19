import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsComponent } from './goods/goods/goods.component';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods/goods-update/goods-update.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  { path: 'goods', component: GoodsComponent },
  { path: 'goods/create', component: GoodsCreateComponent },
  { path: 'goods/update/:id', component: GoodsUpdateComponent },
  { path: 'goods/details/:id', component: GoodsDetailsComponent },
  { path: 'goods/list', component: GoodsListComponent },
  { path: '', redirectTo: '/goods', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
