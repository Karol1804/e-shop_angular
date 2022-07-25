import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public user: any;
  public isAuthenticated!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      this.user = user
    })
    console.log(this.user)

    const isAuthenticated = this.user ? true : false;
    console.log(isAuthenticated)
    if (isAuthenticated) {
      this.isAuthenticated = true;
    }

    if (!isAuthenticated) {
      this.isAuthenticated = false;
      alert("You must be authenticated in order to acces this page")
    }


    console.log(this.isAuthenticated)
    return this.isAuthenticated;

  }
  //   var isAuthenticated = this.authService.getLogdedUser();
  //   if (!isAuthenticated) {
  //     this.router.navigate(['/login']);
  //   }
  //   return isAuthenticated;
  // }
}