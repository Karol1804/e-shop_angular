import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { getDatabase, ref, set,update } from "firebase/database";
import * as firebase from "firebase/app";
import {AuthService} from "./auth.service"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private authService: AuthService)
  
  { }
  writeUserData(userId: string, name: any, email: any) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId),{
      username: name,
      email: email
    });
    
  }
}
