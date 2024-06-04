import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../../Services/reportes.service';


@Component({
  selector: 'app-admin-reportes',
  templateUrl: './admin-reportes.component.html',
  styleUrls: ['./admin-reportes.component.css']
})
export class AdminReportesComponent implements OnInit {

  reportes: any[] = [];
  nuevoReporte: string = '';

  constructor(private reportesService: ReportesService) { }

  ngOnInit(): void {
    this.obtenerReportes();
  }

  obtenerReportes(): void {
    this.reportesService.getReportes().subscribe(
      data => {
        this.reportes = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  agregarReporte(): void {
    if (!this.nuevoReporte) {
      console.error('El reporte no puede estar vacío');
      return;
    }

    const reporte = { reporte: this.nuevoReporte };
    this.reportesService.addReporte(reporte).subscribe(
      () => {
        this.obtenerReportes();
        this.nuevoReporte = '';
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
