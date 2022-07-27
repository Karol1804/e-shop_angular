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

import './firebase-initialization'
// import {
//   initializeApp,
//   provideFirebaseApp
// } from '@angular/fire/app';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
// import { UserService } from './services/user.service';
// import { getAuth,signOut } from "firebase/auth";
// // import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuard } from './guards/auth.guard';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { UserService } from './services/user.service';


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
    AngularFireModule.initializeApp(environment.firebaseConfig),
  
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
  providers: [AuthGuard,UserService,{provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {}


