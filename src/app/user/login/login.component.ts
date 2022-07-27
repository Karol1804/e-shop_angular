import { Component } from '@angular/core';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router,private authService: AuthService) {

  }
  loginUser() {
  this.authService.login()
 
  }
  // redirect() {
  //   this.router.navigate(['home']);
  // }
}
