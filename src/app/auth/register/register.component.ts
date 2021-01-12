import { Component, OnInit } from '@angular/core';

//1.- importamos dependencias
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //2.- creamos objeto de tipo formulario para registarr un usuario
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  //3.- inyectamos servicio
  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
  }

  //creamos metodo para registarr a un nuevo usuario con ayuda del servicio
  async onRegister(){
    const {email,password}=this.loginForm.value;
    const newUser= await this.authServ.register(email,password);
  }

}
