import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth:AngularFireAuth,public router:Router) { }


    async register(email: string, password: string){
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      this.router.navigate(['crud']);
    }

    async login(email: string, password: string) {
       const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['crud']);
      return result;
  }

  async logout() {
    const result = await this.afAuth.signOut();
   this.router.navigate(['login']);
}

getCurrentUser() {
  try {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  catch (error) {
    console.log(error);
  }
}



}