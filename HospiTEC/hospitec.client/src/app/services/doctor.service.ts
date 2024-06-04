import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { Login } from '../Interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private urlApi: string = "https://hospitec-server.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  login(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Doctor/login", request);
  }
}
