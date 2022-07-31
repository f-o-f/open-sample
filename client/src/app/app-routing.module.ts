import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsModule } from './goods/goods.module';

const routes: Routes = [
  { path: '', redirectTo: 'goods', pathMatch: 'full' },
  // { path: '', component: GoodsListComponent },
  // { path: 'detail', component: GoodsDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GoodsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
