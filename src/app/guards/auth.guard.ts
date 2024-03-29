import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  // public user: any;
  // public isAuthenticated!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authService.isLoggedIn)
      if (this.authService.isLoggedIn !== true) {
        window.alert('Access Denied, Login is Required to Access This Page!');
        this.router.navigate(['login']);
      }
      return true;
    }
  }