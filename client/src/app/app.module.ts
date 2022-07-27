import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { GoodsService } from './goods/goods.service';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { GoodsUpdateComponent } from './goods/goods-update/goods-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GoodsCreateComponent,
    GoodsDetailsComponent,
    GoodsListComponent,
    GoodsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
