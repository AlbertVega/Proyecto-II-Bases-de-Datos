import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { Login } from '../../Interfaces/Login';

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
  spinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DoctorService
  ) { }

  ngOnInit(): void{
    this.formulario = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onLogin() {
    //make request
    const request: Login = {
      email: this.formulario.value.email,
      password: this.formulario.value.password
    }

    this.service.login(request).subscribe({
      next: (data) => {
        if (data.status) {
          console.log(data.value);
          console.log(data.message);
          this.spinner = true
          this.validate = false
          setTimeout(() => {
            this.router.navigate(['doctor-view']);
          }, 1000);

        } else {
          console.log(data.value);
          console.log(data.message);
          this.validate = true
        }
      }
    });
  }

  test(): boolean {
    return this.validate;
  }
}
