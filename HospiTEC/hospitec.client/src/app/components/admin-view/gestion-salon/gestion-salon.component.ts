import { Component } from '@angular/core';
import { Salon } from '../../../Interfaces/Salon';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-gestion-salon',
  templateUrl: './gestion-salon.component.html',
  styleUrl: './gestion-salon.component.css'
})
export class GestionSalonComponent {
  rows: Salon[] = [];
  editingRow: boolean[] = [];
  newRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los activos
  */
  constructor(private service: AdminService) {
    this.service.getSalones().subscribe({
      next: (data) => {
        if (data.status) {
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
    this.rows.push({ numero: 0, nombre: '', piso: 0, medicina: '', capacidad_camas: 0 });
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
    const request: Salon = {
      numero: this.rows[index].numero,
      nombre: this.rows[index].nombre,
      piso: this.rows[index].piso,
      medicina: this.rows[index].medicina,
      capacidad_camas: this.rows[index].capacidad_camas
    }
    if (this.newRow[index] == true) {
      this.service.setSalon(request).subscribe({
        next: (data) => {
          if (data.status) {
            console.log(data.message);
            this.newRow[index] = false;
          } else {
            console.log(data.value);
            console.log(data.message);
          }
        }
      });
      this.newRow[index] = false;
    } else {
      this.service.updateSalon(request).subscribe({
        next: (data) => {
          if (data.status) {
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
    const request: Salon = {
      numero: this.rows[index].numero,
      nombre: this.rows[index].nombre,
      piso: this.rows[index].piso,
      medicina: this.rows[index].medicina,
      capacidad_camas: this.rows[index].capacidad_camas
    }
    this.service.deleteSalon(request).subscribe({
      next: (data) => {
        if (data.status) {
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
