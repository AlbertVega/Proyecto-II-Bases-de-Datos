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
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { GestionSalonComponent } from './components/admin-view/gestion-salon/gestion-salon.component';

import { ExcelUploaderComponent } from './components/admin-view/excel-uploader/excel-uploader.component';
import { AdminReportesComponent } from './components/admin-view/admin-reportes/admin-reportes.component';

import { GestionCamasComponent } from './components/admin-view/gestion-camas/gestion-camas.component';
import { GestionEquipoComponent } from './components/admin-view/gestion-equipo/gestion-equipo.component';
import { GestionPersonalComponent } from './components/admin-view/gestion-personal/gestion-personal.component';
import { GestionProcedimientosComponent } from './components/admin-view/gestion-procedimientos/gestion-procedimientos.component'
import { AddRecordComponent } from './components/doctor-view/add-record/add-record.component';

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
      { path: 'add-patient', component: AddPatientComponent },
      { path: 'add-record', component: AddRecordComponent }
    ]
  },
  { path: 'admin-login', component: AdminLoginComponent },
  
  {
    path: 'admin-view', component: AdminViewComponent,
    children: [

      {path:'gestion-salon',component:GestionSalonComponent},
      {path:'excel-uploader',component:ExcelUploaderComponent},
      {path:'admin-reportes',component:AdminReportesComponent},
      { path: 'gestion-salon', component: GestionSalonComponent },
      { path: 'gestion-camas', component: GestionCamasComponent },
      { path: 'gestion-procedimientos', component: GestionProcedimientosComponent },
      { path: 'gestion-equipo', component: GestionEquipoComponent },
      { path: 'gestion-personal', component: GestionPersonalComponent }

    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
