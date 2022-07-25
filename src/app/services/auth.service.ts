import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged, signInWithRedirect, signOut,authState } from '@angular/fire/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  
export class AuthService {
  // public user!: Observable<boolean>;
  public user: any;
  constructor() { }

  // login (){
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithRedirect(auth, provider);
  //   const user = auth.currentUser;
  //   return user?.displayName

  //   }


  // logout() {
  //   const auth = getAuth();
  //   signOut(auth).then(() => {
  //     alert("User logged out succesfully")
  //   }).catch((error) => {
  //     alert("An error happened")
  //   });

  // }
  // getLogdedUser() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     this.user = user?.displayName
  //     console.log(this.user);
  //     return this.user
  //   });
    
  // }
}
