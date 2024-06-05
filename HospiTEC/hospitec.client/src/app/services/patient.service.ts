import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { RegisterPatient } from '../Interfaces/Register';
import { Login } from '../Interfaces/login';
import { History } from '../Interfaces/History';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private urlApi: string = "https://hospitec-server.azurewebsites.net/api/";

  private emailSource = new BehaviorSubject<string>('');
  currentEmail = this.emailSource.asObservable();

  constructor(private http: HttpClient) { }

  getPatient(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Patient");
  }

  setPatient(request: RegisterPatient): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Patient/register", request);
  }

  login(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Patient/login", request);
  }

  exchangeEmail(email: string) {
    this.emailSource.next(email);
  }

  patientHistory(request: History): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.urlApi + "Patient/history", request);
  }
}
