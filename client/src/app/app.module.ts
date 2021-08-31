import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods/goods-details/goods-details.component';
import { GoodsComponent } from './goods/goods/goods.component';
import { GoodsCreateComponent } from './goods/goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods/goods-update/goods-update.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CustomInterceptor } from './custom-interceptor';


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
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
