import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Login } from '../../Interfaces/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  form!: FormGroup;
  validate: boolean = false;

  constructor(private fb: FormBuilder, private service: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onLogin() {
    //make request
    const request: Login = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.service.login(request).subscribe({
      next: (data) => {
        if (data.status) {
          console.log(data.value);
          console.log(data.message);
          this.router.navigate(['patient-view']);
          this.validate = false
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
