import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { RegisterEmployee } from '../../../Interfaces/RegisterEmployee';
import { DeleteEmployee } from '../../../Interfaces/DeleteEmpoyee';
import { EmployeeRol } from '../../../Interfaces/EmployeeRol';

@Component({
  selector: 'app-gestion-personal',
  templateUrl: './gestion-personal.component.html',
  styleUrl: './gestion-personal.component.css'
})
export class GestionPersonalComponent {
  rows: EmployeeRol[] = [];
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
          for (let i = 0; i < this.rows.length; i++) {
            this.editingRow.push(false);
            this.newRow.push(false);
          }

        } else {
          console.log(data.value);
          console.log(data.message);
        }
      }
    });
  }

  /*
   * AddRow
   * Entradas: ninguna
   * Salidas: ninguna
   * Funcionamiento: agrega una fila a la tabla
   */
  addRow() {
    this.rows.push({ email: '', password: '', nombre: '', apellido1: '', apellido2: '', cedula: 0, telefono: 0, provincia: '', canton: '', distrito: '', fechaNacimiento: new Date(), fechaIngreso: new Date(), rol: '' });
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
    if (this.newRow[index] == true) {
      const request: RegisterEmployee = {
        nombre: this.rows[index].nombre,
        apellido1: this.rows[index].apellido1,
        apellido2: this.rows[index].apellido2,
        cedula: this.rows[index].cedula,
        numeroTel: this.rows[index].telefono,
        provincia: this.rows[index].provincia, //xd
        canton: this.rows[index].canton, //xd
        distrito: this.rows[index].distrito, //xd
        nacimiento: new Date(this.rows[index].fechaNacimiento),
        email: this.rows[index].email,
        password: this.rows[index].password, //xd
        fechaIngreso: new Date(this.rows[index].fechaIngreso)
      }

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
      const request: EmployeeRol = {
        nombre: this.rows[index].nombre,
        apellido1: this.rows[index].apellido1,
        apellido2: this.rows[index].apellido2,
        cedula: this.rows[index].cedula,
        telefono: this.rows[index].telefono,
        provincia: this.rows[index].provincia, //xd
        canton: this.rows[index].canton, //xd
        distrito: this.rows[index].distrito, //xd
        fechaNacimiento: new Date(this.rows[index].fechaNacimiento),
        email: this.rows[index].email,
        password: this.rows[index].password, 
        fechaIngreso: new Date(this.rows[index].fechaIngreso),
        rol: 'Administrativo'
      }

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
