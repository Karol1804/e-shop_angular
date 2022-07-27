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
import { AuthGuard } from './guards/auth.guard';
import { NavigationComponent } from './user/navigation/navigation.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'shopping-cart',component: ShoppingCartComponent},
  {path:'products',component: ProductsComponent},
  {path:'login',component: LoginComponent},
  {path:'check-out',component: CheckOutComponent,canActivate:[AuthGuard]},
  {path:'order-success',component: OrderSuccessComponent,canActivate:[AuthGuard]},
  {path:'my/orders',component: MyOrdersComponent,canActivate:[AuthGuard]},
  {path:'admin/products',component: AdminProductsComponent,canActivate:[AuthGuard]},
  {path:'admin/orders',component: AdminOrdersComponent,canActivate:[AuthGuard]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
