import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { PatientSidenavComponent } from './components/patient-view/patient-sidenav/patient-sidenav.component';
import { HistorialViewComponent } from './components/patient-view/historial-view/historial-view.component';
import { PatientBodyComponent } from './components/patient-view/patient-body/patient-body.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterComponent,
    PatientLoginComponent,
    PatientViewComponent,
    PatientSidenavComponent,
    HistorialViewComponent,
    PatientBodyComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
