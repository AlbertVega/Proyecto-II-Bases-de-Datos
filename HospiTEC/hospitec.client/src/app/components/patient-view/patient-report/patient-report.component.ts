import { Component } from '@angular/core';
import { ReportesService } from '../../../services/reportes.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrl: './patient-report.component.css'
})
export class PatientReportComponent {
  reportes: any[] = [];
  nuevoReporte: string = '';

  constructor(private reportesService: ReportesService) { }

  agregarReporte(): void {
    if (!this.nuevoReporte) {
      console.error('El reporte no puede estar vacío');
      return;
    }

    const reporte = { reporte: this.nuevoReporte };
    this.reportesService.addReporte(reporte).subscribe(
      () => {
        this.nuevoReporte = '';
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

