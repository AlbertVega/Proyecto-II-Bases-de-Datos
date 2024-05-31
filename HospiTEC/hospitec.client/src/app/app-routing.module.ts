import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

const routes: Routes = [
  { path: 'patient-reg', component: PatientRegisterComponent },
  { path: 'patient-log', component: PatientLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
