import { Component } from '@angular/core';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import { AuthService } from '../../services/auth.service'
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router) {


  }
  loginUser() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
    console.log(auth.currentUser)
  }
  redirect() {
    this.router.navigate(['home']);
  }


}
