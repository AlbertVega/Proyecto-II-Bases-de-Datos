import { Component } from '@angular/core';
import { Login } from '../../Interfaces/login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor() { }

  onLogin() {
    const request: Login = {
      email: this.email,
      password: this.password
    }

   


  }
}
