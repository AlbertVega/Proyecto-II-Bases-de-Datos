import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-uploader',
  templateUrl: './excel-uploader.component.html',
  styleUrls: ['./excel-uploader.component.css']
})
export class ExcelUploaderComponent {
  data: any[] = [];

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) {
      throw new Error('No se puede cargar múltiples archivos');
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      // Tomar el nombre de la primera hoja
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // Convertir los datos de la hoja a un arreglo JSON
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      this.data = data.map((row: any) => JSON.stringify(row));
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
