import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  formulario!: FormGroup;
  validate: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
      console.log('Usuario y contraseña correctos')
    } else {
      this.validate = true
    }

  }

  test(): boolean {
    return this.validate;
  }
}
