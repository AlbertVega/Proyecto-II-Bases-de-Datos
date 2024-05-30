import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-gestion-salon',
  templateUrl: './gestion-salon.component.html',
  styleUrl: './gestion-salon.component.css'
})
export class GestionSalonComponent {
  rows = [
    { numero: 1, nombre: 'Quirúrgico', capacidad: 2, tipo: 1,piso:0 },
    { numero: 2, nombre: 'Pediatra', capacidad: 18, tipo: 3,piso:1 }
   
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
    this.rows.push({ numero:0,nombre: '',  capacidad: 0,tipo:0,piso:0 });
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
