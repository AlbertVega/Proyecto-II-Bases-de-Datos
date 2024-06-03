import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { RegisterPatient } from '../Interfaces/Register';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private urlApi: string = "https://hospitec-server.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  getPatient(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Patient");
  }

  setPatient(request: RegisterPatient): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Patient", request);
  }
}
