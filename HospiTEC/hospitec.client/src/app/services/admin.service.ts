import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { RegisterEmployee } from '../Interfaces/RegisterEmployee';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlApi: string = "https://hospitec-server.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  setEmployee(request: RegisterEmployee): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/register", request);
  }

  login(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "admin/login", request);
  }
}
