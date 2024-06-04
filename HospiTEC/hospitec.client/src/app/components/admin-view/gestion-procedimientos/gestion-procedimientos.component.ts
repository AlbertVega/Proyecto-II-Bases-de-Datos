import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-procedimientos',
  templateUrl: './gestion-procedimientos.component.html',
  styleUrl: './gestion-procedimientos.component.css'
})
export class GestionProcedimientosComponent {
  rows = [
    { nombre: 'Apendicectomía', cantidad:2 },
    { nombre: 'Biopsia de mama', cantidad: 1 },
    { nombre: 'Cirugía de cataratas', cantidad: 1 },
    { nombre: 'Cesárea', cantidad: 2 },
    { nombre: 'Histerectomía', cantidad: 1 },
    { nombre: 'Cirugía para la lumbalgia', cantidad: 3 },
    { nombre: 'Mastectomía', cantidad: 3 },
    { nombre: 'Amigdalectomía', cantidad: 1 },

  ];

  editingRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los activos
  */
  constructor() {

    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  /*
   * AddRow
   * Entradas: ninguna
   * Salidas: ninguna
   * Funcionamiento: agrega una fila a la tabla
   */
  addRow() {
    this.rows.push({ nombre: '', cantidad: 0});
    this.editingRow.push(true);
  }

  /*
  * EditRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: habilita la edición de la fila
  */
  editRow(index: number) {
    this.editingRow[index] = true;
  }

  /*
  * SaveRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: deshabilita la edición de la fila
  */
  saveRow(index: number) {
    this.editingRow[index] = false;
  }

  /*
  * DeleteRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: elimina la fila de la tabla
  */
  deleteRow(index: number) {
    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }
}
