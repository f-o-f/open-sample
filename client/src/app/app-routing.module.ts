import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from '@app/menu/menu.component';
import { GoodsListComponent } from '@app/goods/goods-list/goods-list.component';
import { GoodsDetailsComponent } from '@app/goods/goods-details/goods-details.component';
import { GoodsUpdateComponent } from '@app/goods/goods-update/goods-update.component';
import { GoodsCreateComponent } from '@app/goods/goods-create/goods-create.component';
const routes: Routes = [
  { path: 'goods', component: MenuComponent },
  { path: 'goods/create', component: GoodsCreateComponent },
  { path: 'goods/update', component: GoodsUpdateComponent },
  { path: 'goods/details', component: GoodsDetailsComponent },
  { path: 'goods/list', component: GoodsListComponent },
  { path: '', redirectTo: 'goods', pathMatch: 'prefix' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
