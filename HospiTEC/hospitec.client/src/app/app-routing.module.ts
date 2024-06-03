import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { HistorialViewComponent } from './components/patient-view/historial-view/historial-view.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { AddPatientComponent } from './components/doctor-view/add-patient/add-patient.component';
import { GestionReservacionComponent } from './components/patient-view/gestion-reservacion/gestion-reservacion.component';

const routes: Routes = [
  { path: 'patient-reg', component: PatientRegisterComponent },
  { path: 'patient-log', component: PatientLoginComponent },
  {
    path: 'patient-view', component: PatientViewComponent,
    children: [
        { path: 'historial-view', component: HistorialViewComponent },
        { path: 'gestion-reservacion', component: GestionReservacionComponent}
      ]
  },
  { path: 'doctor-login', component: DoctorLoginComponent },
  {
    path: 'doctor-view', component: DoctorViewComponent,
    children: [
      { path: 'add-patient', component: AddPatientComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
