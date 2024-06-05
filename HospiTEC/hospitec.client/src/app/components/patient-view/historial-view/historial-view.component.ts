import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
import { History } from '../../../Interfaces/History';

@Component({
  selector: 'app-historial-view',
  templateUrl: './historial-view.component.html',
  styleUrl: './historial-view.component.css'
})
export class HistorialViewComponent implements OnInit{
    rows = [
      { fecha: '12/4/2024', procedimiento: 'Cesarea', tratamiento: 'Antibiotico' },
      

    ];

  editingRow: boolean[] = [];
  email: string = '';

  /*
  * Constructor
  * Entradas: servicio de paciente
  * Salidas: ninguna
  * Funcionamiento: se encarga de obtener los activos
  */
  constructor(private service: PatientService) {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  ngOnInit(): void {
    this.service.currentEmail.subscribe(email => this.email = email);
    console.log(this.email);

    const request: History = {
      fecha_procedimiento: '',
      nombre_procedimiento: '',
      tratamiento: '',
      email: this.email
    }

    this.service.patientHistory(request).subscribe({
      next: (data) => {
        if (data.status) {
          console.log(data.value);
          console.log(data.message);
          // cargar valores en las tablas
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
