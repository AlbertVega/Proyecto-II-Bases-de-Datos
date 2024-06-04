import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-reservacion',
  templateUrl: './gestion-reservacion.component.html',
  styleUrl: './gestion-reservacion.component.css'
})
export class GestionReservacionComponent {
  rows = [
    { procedimiento: 'Apendicectomía', fecha_ingreso: '01/01/2021', fecha_salida: '03/01/2021' },
    { procedimiento: 'Colecistectomía', fecha_ingreso: '01/01/2021', fecha_salida: '03/01/2021' },
    { procedimiento: 'Histerectomía', fecha_ingreso: '01/01/2021', fecha_salida: '03/01/2021' },
  ];

  editingRow: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ procedimiento: '', fecha_ingreso: '', fecha_salida: '' });
    this.editingRow.push(true);
  }

  editRow(index: number) {
    this.editingRow[index] = true;
  }

  saveRow(index: number) {
    this.editingRow[index] = false;
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }
}
