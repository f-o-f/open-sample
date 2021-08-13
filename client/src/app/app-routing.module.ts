import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsComponent } from './goods/goods/goods.component';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods/goods-update/goods-update.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'goods/create', component: GoodsCreateComponent },
  { path: 'goods/update/:id', component: GoodsUpdateComponent },
  { path: 'goods/details/:id', component: GoodsDetailsComponent },
  { path: 'goods/list', component: GoodsListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
