import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent implements OnInit{

  email: string = '';
  password: string = '';
  formulario!: FormGroup;
  validate: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.formulario = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onLogin() {
    //make request
    const email = this.formulario.value.email;
    const password = this.formulario.value.password;
    if (email == 'admin' && password == 'admin') {
      this.validate = false
      this.router.navigate(['doctor-view']);
    } else {
      this.validate = true
    } 

  }

  test(): boolean {
    return this.validate;
  }
}
