import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReportesService {

  private urlApi: string = "http://localhost:5300/api/";

  constructor(private http: HttpClient) { }

  // Método para obtener todos los reportes
  getReportes(): Observable<any> {
    return this.http.get<any>(this.urlApi + "reportes");
  }

  // Método para subir un nuevo reporte
  addReporte(reporte: any): Observable<any> {
    return this.http.post<any>(this.urlApi + "reportes", reporte);
  }
}

