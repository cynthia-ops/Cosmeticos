import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //paso 1: creamos la logica de login
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  //paso 2: inyectamos el service
  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }

  //paso 3: creamos metodo para loguear haciendo llamada al servicio
  async onLogin() {
    const { email, password } = this.loginForm.value;
    const user = await this.authServ.login(email, password);
  }
}
