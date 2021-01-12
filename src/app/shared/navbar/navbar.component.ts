import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user$:Observable<any>=this.authServ.afAuth.user;

  public user2:any
  //inyectamos servicio y router
  constructor(private authServ: AuthService,private router: Router) { }

  async ngOnInit() {

    //this.authServ.logout();

    console.log('Navbar');
    this.user2 = await this.authServ.getCurrentUser();
    if (this.user2) {
      console.log('User-->', this.user2);
    }
  }

  onLogout(){
    this.authServ.logout();
  }

}
