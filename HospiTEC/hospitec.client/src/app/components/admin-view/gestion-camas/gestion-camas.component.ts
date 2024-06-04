import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-gestion-camas',
  templateUrl: './gestion-camas.component.html',
  styleUrl: './gestion-camas.component.css'
})
export class GestionCamasComponent {
  rows = [
    { placa: 1234, tipo: 'Computadora', marca: 'HP', fecha_compra: '2021-01-01', prestamoRequiereAprobacion: 'No', id_lab_fk: 'F2-08' },
    { placa: 5678, tipo: 'Computadora', marca: 'HP', fecha_compra: '2021-01-01', prestamoRequiereAprobacion: 'No', id_lab_fk: 'F2-08' },
    { placa: 9101, tipo: 'Computadora', marca: 'HP', fecha_compra: '2021-01-01', prestamoRequiereAprobacion: 'No', id_lab_fk: 'F2-08' }
  ];

  editingRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los activos
  */
  constructor(
    private _adminService: AdminService,
  ) {
    _adminService.getActivos().subscribe({
      next: (data) => {
        if (data.status) {
          this.rows = data.value;
        } else {
          console.log("Error");
        }
      }
    });

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
    this.rows.push({ placa: 0, tipo: '', marca: '', fecha_compra: '', prestamoRequiereAprobacion: '', id_lab_fk: '' });
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
