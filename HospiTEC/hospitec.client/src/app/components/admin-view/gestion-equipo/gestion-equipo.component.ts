import { Component } from '@angular/core';
import { EquipoMedico } from '../../../Interfaces/EquipoMedico';

@Component({
  selector: 'app-gestion-equipo',
  templateUrl: './gestion-equipo.component.html',
  styleUrl: './gestion-equipo.component.css'
})
export class GestionEquipoComponent {
  rows: EquipoMedico[] = [];
  editingRow: boolean[] = [];
  newRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los activos
  */
  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
      this.newRow.push(false);
    }
  }

  /*
   * AddRow
   * Entradas: ninguna
   * Salidas: ninguna
   * Funcionamiento: agrega una fila a la tabla
   */
  addRow() {
    this.rows.push({ numero_cama: 0, nombre: '', cantidad: 0, proveedor: '' });
    this.editingRow.push(true);
    this.newRow.push(true);
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
    this.newRow[index] = false;
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
