import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminBodyComponent } from './components/admin-view/admin-body/admin-body.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { GestionSalonComponent } from './components/admin-view/gestion-salon/gestion-salon.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admin-view', component: AdminViewComponent,
    children: [
      {path:'gestion-salon',component:GestionSalonComponent}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
