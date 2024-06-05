import { Component, OnInit } from '@angular/core';
import { Login } from '../../Interfaces/login';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  form!: FormGroup;
  validate: boolean = false;

  constructor(private fb: FormBuilder, private service: AdminService, private router: Router) { }

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
          this.router.navigate(['admin-view']);
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
