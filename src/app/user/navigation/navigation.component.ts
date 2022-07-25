import { authState } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
// import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user:any;
  constructor() { }

  ngOnInit(): void {
    this.logdedUser();

  }
  // logOut(){
  //   const auth = getAuth();
  //   signOut(auth)
  // }
    logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("User logged out succesfully")
    }).catch((error) => {
      alert("An error happened")
    });

  }
  logdedUser(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userr = user.displayName
        console.log(userr)
        
        // ...
      } else {
        // User is signed out
        // ...
        console.log("Any user logded")
      }
    });
  }

}
