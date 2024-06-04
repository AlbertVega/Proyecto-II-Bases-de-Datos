import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { AddPatientComponent } from './components/doctor-view/add-patient/add-patient.component';
import { AddRecordComponent } from './components/doctor-view/add-record/add-record.component';

const routes: Routes = [
  { path: 'doctor-login', component: DoctorLoginComponent },
  {
    path: 'doctor-view', component: DoctorViewComponent,
    children: [
      { path: 'add-patient', component: AddPatientComponent },
      { path: 'add-record', component: AddRecordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
