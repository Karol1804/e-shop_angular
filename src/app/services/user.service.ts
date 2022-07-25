import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { getDatabase, ref, set } from "firebase/database";
import * as firebase from "firebase/app";
import {AuthService} from "./auth.service"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  
  constructor(private authService: AuthService)
  
  { }
  writeUserData(user:AuthService["user"],userId: string, name: any, email: any, imageUrl: any) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: user.displayName,
      email: user.email
    });
  }
}
