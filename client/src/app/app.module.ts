import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { GoodsComponent } from './goods/goods/goods.component';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods/goods-update/goods-update.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    GoodsDetailsComponent,
    GoodsComponent,
    GoodsCreateComponent,
    GoodsUpdateComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
