import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'shopping-cart',component: ShoppingCartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
