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

import { ExcelUploaderComponent } from './components/admin-view/excel-uploader/excel-uploader.component';
import { AdminReportesComponent } from './components/admin-view/admin-reportes/admin-reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminViewComponent,
    AdminBodyComponent,
    AdminSidenavComponent,
    AdminReportesComponent,
    GestionSalonComponent,
    ExcelUploaderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
