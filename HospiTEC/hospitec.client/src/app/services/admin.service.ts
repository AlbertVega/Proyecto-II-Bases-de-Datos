import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { RegisterEmployee } from '../Interfaces/RegisterEmployee';
import { Login } from '../Interfaces/login';
import { DeleteEmployee } from '../Interfaces/DeleteEmpoyee';
import { EmployeeRol } from '../Interfaces/EmployeeRol';
import { Salon } from '../Interfaces/Salon';
import { Cama } from '../Interfaces/Cama';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlApi: string = "https://hospitec-server.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  setEmployee(request: EmployeeRol): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/register", request);
  }

  login(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/login", request);
  }

  getEmployees(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "admin/personal");
  }

  deleteEmployee(request: DeleteEmployee): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/delete", request);
  }

  updateEmployee(request: EmployeeRol): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/update", request);
  }

  setSalon(request: Salon): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/registerSalon", request);
  }

  getSalones(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "admin/salon");
  }

  deleteSalon(request: Salon): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/deleteSalon", request);
  }

  updateSalon(request: Salon): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/updateSalon", request);
  }

  setCama(request: Cama): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Cama/register", request);
  }

  updateCama(request: Cama): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Cama/update", request);
  }

  getCamas(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Cama/camas");
  }

  deleteCama(request: Cama): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Cama/delete", request);
  }
}
