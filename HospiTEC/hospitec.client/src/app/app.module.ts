import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { DoctorBodyComponent } from './components/doctor-view/doctor-body/doctor-body.component';
import { DoctorSidenavComponent } from './components/doctor-view/doctor-sidenav/doctor-sidenav.component';
import { AddPatientComponent } from './components/doctor-view/add-patient/add-patient.component';
import { AddRecordComponent } from './components/doctor-view/add-record/add-record.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorLoginComponent,
    DoctorViewComponent,
    DoctorBodyComponent,
    DoctorSidenavComponent,
    AddPatientComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
