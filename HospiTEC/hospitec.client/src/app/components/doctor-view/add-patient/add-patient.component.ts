import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  rows = [
    { placa: '2011283', tipo: 'Arduino', marca: 'ArduinoUNO', fecha: '04/05/2017' }
  ];

  editingRow: boolean[] = [];
  selectedRow: number = -1;
  selectedType: string = '';

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  selected(index: number) {
    this.selectedRow = index;
  }

  removeSelection() {
    this.selectedRow = -1;
  }
}
