import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { GoodsUpdateComponent } from './goods/goods-update/goods-update.component';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    GoodsDetailsComponent,
    GoodsUpdateComponent,
    GoodsCreateComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
