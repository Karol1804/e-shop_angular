import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { NavigationComponent } from './user/navigation/navigation.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './user/my-orders/my-orders.component';
import { ProductsComponent } from './user/products/products.component';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { OrderSuccessComponent } from './user/order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './user/login/login.component';

import './firebase-init'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


