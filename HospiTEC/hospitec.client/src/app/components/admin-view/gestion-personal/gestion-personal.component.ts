import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-gestion-personal',
  templateUrl: './gestion-personal.component.html',
  styleUrl: './gestion-personal.component.css'
})
export class GestionPersonalComponent {
  rows = [
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01-01-1995', telefono: '83421558', direccion: 'san juan', email: 'jpg@gmail.com', fecha_ingreso: '2024-05-14' },
    { cedula: '987654321', nombre: 'Maria', apellido1: 'Gomez', apellido2: 'Gonzalez', edad: '30', fecha_nacimiento: '01-01-1990', telefono: '83421558', direccion: 'san juan', email: 'asd@gmail.com', fecha_ingreso: '03-01-2020' },
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01-01-1995', telefono: '83421558', direccion: 'san juan', email: 'qwe@gmail.com', fecha_ingreso: '03-01-2020' },
  ];

  editingRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los profesores
  */
  constructor(
    private _adminService: AdminService,
  ) {
    _adminService.getProfesor().subscribe({
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
    this.rows.push({ cedula: '', nombre: '', apellido1: '', apellido2: '', edad: '', fecha_nacimiento: '', telefono: '', direccion: '', email: '', fecha_ingreso: '' });
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
