import { authState } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
// import { AuthService } from '../../services/auth.service'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user:any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.logdedUser();

  }
  // Log out 
    logOut() {
      this.authService.signOut();
  }
  // Current user is logded
  logdedUser(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/firebase.User
      //   const userr = user.displayName
        // console.log(user?.emailVerified)
        
      //   // ...
      // } else {
      //   // User is signed out
      //   // ...
      //   console.log("Any user logded")
      // }
      
    }); 
  }

}
