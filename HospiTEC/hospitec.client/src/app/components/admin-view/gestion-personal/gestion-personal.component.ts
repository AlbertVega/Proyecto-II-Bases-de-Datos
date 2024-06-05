import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { RegisterEmployee } from '../../../Interfaces/RegisterEmployee';
import { DeleteEmployee } from '../../../Interfaces/DeleteEmpoyee';

@Component({
  selector: 'app-gestion-personal',
  templateUrl: './gestion-personal.component.html',
  styleUrl: './gestion-personal.component.css'
})
export class GestionPersonalComponent {
  rows = [
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01-01-1995', telefono: '83421558', provincia: 'san juan', distrito: 'macori', canton: 'macondo', email: 'jpg@gmail.com', password: 'adfbniu', fecha_ingreso: '2024-05-14' },
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01-01-1995', telefono: '83421558', provincia: 'san juan', distrito: 'macori', canton: 'macondo', email: 'qwe@gmasd.com', password: 'adfbniu', fecha_ingreso: '2024-05-14' },
    { cedula: '123456789', nombre: 'Juan', apellido1: 'Perez', apellido2: 'Gonzalez', edad: '25', fecha_nacimiento: '01-01-1995', telefono: '83421558', provincia: 'san juan', distrito: 'macori', canton: 'macondo', email: 'qwe@gmasd.com', password: 'adfbniu', fecha_ingreso: '2024-05-14' },
  ];

  editingRow: boolean[] = [];
  newRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los profesores
  */
  constructor(private service: AdminService) {
    this.service.getEmployees().subscribe({
      next: (data) => {
        if (data.status) {
          console.log(data.value);
          console.log(data.message);
          this.rows = data.value;

        } else {
          console.log(data.value);
          console.log(data.message);
        }
      }
    });

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
    this.rows.push({ cedula: '', nombre: '', apellido1: '', apellido2: '', edad: '', fecha_nacimiento: '', telefono: '', provincia: '', distrito: '', canton: '', email: '', password: '', fecha_ingreso: '' });
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
    const request: RegisterEmployee = {
      nombre: this.rows[index].nombre,
      apellido1: this.rows[index].apellido1,
      apellido2: this.rows[index].apellido2,
      cedula: parseInt(this.rows[index].cedula),
      numeroTel: parseInt(this.rows[index].telefono),
      provincia: this.rows[index].provincia, //xd
      canton: this.rows[index].canton, //xd
      distrito: this.rows[index].distrito, //xd
      nacimiento: new Date(this.rows[index].fecha_nacimiento),
      email: this.rows[index].email,
      password: this.rows[index].password, //xd
      fechaIngreso: new Date(this.rows[index].fecha_ingreso)
    }
    if (this.newRow[index] == true) {
      this.service.setEmployee(request).subscribe({
        next: (data) => {
          if (data.status) {
            console.log(data.value);
            console.log(data.message);
          } else {
            console.log(data.value);
            console.log(data.message);
          }
        }
      });
      this.newRow[index] = false;
    } else {
      this.service.updateEmployee(request).subscribe({
        next: (data) => {
          if (data.status) {
            console.log(data.value);
            console.log(data.message);
          } else {
            console.log(data.value);
            console.log(data.message);
          }
        }
      });
    }

  }

  /*
  * DeleteRow
  * Entradas: index de la fila
  * Salidas: ninguna
  * Funcionamiento: elimina la fila de la tabla
  */
  deleteRow(index: number) {
    const request: DeleteEmployee = {
      email: this.rows[index].email,
      rol: 'Administrativo'
    }

    this.service.deleteEmployee(request).subscribe({
      next: (data) => {
        if (data.status) {
          console.log(data.value);
          console.log(data.message);
        } else {
          console.log(data.value);
          console.log(data.message);
        }
      }
    });

    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }
}
