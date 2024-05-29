import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AdminBodyComponent } from './components/admin-view/admin-body/admin-body.component';
import { AdminSidenavComponent } from './components/admin-view/admin-sidenav/admin-sidenav.component';
import { GestionSalonComponent } from './components/admin-view/gestion-salon/gestion-salon.component';
import { GestionEquipoComponent } from './components/admin-view/gestion-equipo/gestion-equipo.component';
import { GestionCamasComponent } from './components/admin-view/gestion-camas/gestion-camas.component';
import { GestionPersonalComponent } from './components/admin-view/gestion-personal/gestion-personal.component';
//import { ExcelUploaderComponent } from './components/excel-uploader/excel-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminViewComponent,
    AdminBodyComponent,
    AdminSidenavComponent,
    GestionSalonComponent,
    GestionEquipoComponent,
    GestionCamasComponent,
    GestionPersonalComponent,
    //ExcelUploaderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
