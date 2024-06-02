import { Component } from '@angular/core';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-historial-view',
  templateUrl: './historial-view.component.html',
  styleUrl: './historial-view.component.css'
})
export class HistorialViewComponent {
    rows = [
      { fecha: '12/4/2024', procedimiento: 'Cesarea', tratamiento: 'Antibiotico' },
      

    ];

  editingRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de paciente
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
    this.rows.push({ fecha: '', procedimiento: '',tratamiento:'' });
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
