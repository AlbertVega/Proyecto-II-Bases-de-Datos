import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { GestionSalonComponent } from './components/admin-view/gestion-salon/gestion-salon.component';
import { ExcelUploaderComponent } from './components/excel-uploader/excel-uploader.component';
import { GestionCamasComponent } from './components/admin-view/gestion-camas/gestion-camas.component';
import { GestionEquipoComponent } from './components/admin-view/gestion-equipo/gestion-equipo.component';
import { GestionPersonalComponent } from './components/admin-view/gestion-personal/gestion-personal.component';


const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  {path:'admin-upload',component:ExcelUploaderComponent},
  {
    path: 'admin-view', component: AdminViewComponent,
    children: [
      { path: 'gestion-salon', component: GestionSalonComponent },
      { path: 'gestion-camas', component: GestionCamasComponent },
      { path: 'gestion-equipo', component: GestionEquipoComponent },
      { path: 'gestion-personal', component: GestionPersonalComponent }
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
