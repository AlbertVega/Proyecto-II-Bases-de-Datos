import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { PatientSidenavComponent } from './components/patient-view/patient-sidenav/patient-sidenav.component';
import { HistorialViewComponent } from './components/patient-view/historial-view/historial-view.component';
import { PatientBodyComponent } from './components/patient-view/patient-body/patient-body.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { DoctorBodyComponent } from './components/doctor-view/doctor-body/doctor-body.component';
import { DoctorSidenavComponent } from './components/doctor-view/doctor-sidenav/doctor-sidenav.component';
import { AddPatientComponent } from './components/doctor-view/add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterComponent,
    PatientLoginComponent,
    PatientViewComponent,
    PatientSidenavComponent,
    HistorialViewComponent,
    PatientBodyComponent,
    DoctorLoginComponent,
    DoctorViewComponent,
    DoctorBodyComponent,
    DoctorSidenavComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
