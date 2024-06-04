import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-equipo',
  templateUrl: './gestion-equipo.component.html',
  styleUrl: './gestion-equipo.component.css'
})
export class GestionEquipoComponent {
  rows = [
    { nombre: 'Luces quirúrgicas', proveedor: 'TEC', cantidad: 2 },
    { nombre: 'Ultrasonidos', proveedor: 'TEC', cantidad: 5 },
    { nombre: 'Esterilizadores', proveedor: 'TEC', cantidad: 10 },
    { nombre: 'Desfibriladores', proveedor: 'TEC', cantidad: 20 },
    { nombre: 'Monitores', proveedor: 'TEC', cantidad: 30 },
    { nombre: 'Respiradores artificiales', proveedor: 'TEC', cantidad: 40 },
    { nombre: 'Electrocardiógrafos', proveedor: 'TEC', cantidad: 50 },
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
    this.rows.push({ nombre: '', proveedor: '', cantidad: 0 });
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
