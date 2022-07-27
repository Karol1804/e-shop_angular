
import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  user: any;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    // Setting logged in user in localstorage else null
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user
        this.user = user
        console.log(this.userData)
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
    this.router.navigate(['home']);
    console.log(auth.currentUser)
  }
   // Sign in with Google
 
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log(user)
    return user !== null ? true:false;
  }
      
    // Sign out
    signOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      });
    }
  }


//   // logout() {
//   //   const auth = getAuth();
//   //   signOut(auth).then(() => {
//   //     alert("User logged out succesfully")
//   //   }).catch((error) => {
//   //     alert("An error happened")
//   //   });

//   // }
//   getLogdedUser(){
//     onAuthStateChanged(this.auth, (user) => {
//       this.user = user
//     });
//     return this.user
    
//   }
// }
