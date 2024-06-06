import { Component } from '@angular/core';
import { Cama } from '../../../Interfaces/Cama';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-gestion-camas',
  templateUrl: './gestion-camas.component.html',
  styleUrl: './gestion-camas.component.css'
})
export class GestionCamasComponent {
  rows: Cama[] = [];
  editingRow: boolean[] = [];
  newRow: boolean[] = [];

  /*
  * Constructor
  * Entradas: servicio de admin
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los activos
  */
  constructor(private service: AdminService) {
    this.service.getCamas().subscribe({
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
    this.rows.push({ numero: 0, is_uci: false, disponible: false, numero_salon: 0 });
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
    const request: Cama = {
      numero: this.rows[index].numero,
      is_uci: this.rows[index].is_uci,
      disponible: this.rows[index].disponible,
      numero_salon: this.rows[index].numero_salon
    };
    console.log(request);
    if (this.newRow[index]) {
      this.editingRow[index] = false;
      this.service.setCama(request).subscribe({
        next: (data) => {
          if (data.status) {
            console.log(data.value);
            this.newRow[index] = false;
          } else {
            console.log(data.value);
            console.log(data.message);
          }
        }
      });
      this.newRow[index] = false;

    } else {
      this.service.updateCama(request).subscribe({
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
    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }
}
