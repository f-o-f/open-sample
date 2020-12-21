import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'create', component: GoodsCreateComponent },
  { path: 'details', component: GoodsDetailsComponent },
  { path: '', component: MenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
