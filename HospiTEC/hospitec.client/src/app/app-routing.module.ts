import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { HistorialViewComponent } from './components/patient-view/historial-view/historial-view.component';

const routes: Routes = [
  { path: 'patient-reg', component: PatientRegisterComponent },
  { path: 'patient-log', component: PatientLoginComponent },
  {
    path: 'patient-view', component: PatientViewComponent,
    children: [{path:'historial-view',component:HistorialViewComponent}
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
