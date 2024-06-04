import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Interfaces/login';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { OpAproved } from '../Interfaces/op-aproved';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlApi: string = "https://localhost:5000/api/";

  constructor(private http: HttpClient) { }

  login(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "AdminLogin", request);
  }

  getOperators(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Operator");
  }

  setOperators(request: OpAproved): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Operator", request);
  }

  getActivos(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Activo");
  }

  setActivos(request: any): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Activo", request);
  }

  getProfesor(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Professor");
  }

  setProfesorPassword(request: any): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Professor", request);
  }

  getHorarios(request: any): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Horarios", request);
  }
}
