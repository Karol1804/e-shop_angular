import { authState } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
// import { AuthService } from '../../services/auth.service'
import { AuthService } from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user:any;
  constructor(
    private authService: AuthService,
    private userService: UserService
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
      if (user) {
        // console.log(user.displayName,user.email,user.uid)
        this.userService.writeUserData(user.uid,user.displayName,user.email,)
        
        console.log(user?.emailVerified)
        
      //   // ...
      // } else {
      //   // User is signed out
      //   // ...
      //   console.log("Any user logded")
      // }
      }
    }); 
  }

}
