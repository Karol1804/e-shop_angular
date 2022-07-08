import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { HomeComponent } from './user/home/home.component';
import { OrderSuccessComponent } from './user/order-success/order-success.component';
import { ProductsComponent } from './user/products/products.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './user/my-orders/my-orders.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'shopping-cart',component: ShoppingCartComponent},
  {path:'products',component: ProductsComponent},
  {path:'check-out',component: CheckOutComponent},
  {path:'order-success',component: OrderSuccessComponent},
  {path:'my/orders',component: MyOrdersComponent},
  {path:'login',component: LoginComponent},
  {path:'admin/products',component: AdminProductsComponent},
  {path:'admin/orders',component: AdminOrdersComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
