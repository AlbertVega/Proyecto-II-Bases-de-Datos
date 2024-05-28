import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ExcelUploaderComponent } from './components/excel-uploader/excel-uploader.component';

const routes: Routes = [
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-upload',component:ExcelUploaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
