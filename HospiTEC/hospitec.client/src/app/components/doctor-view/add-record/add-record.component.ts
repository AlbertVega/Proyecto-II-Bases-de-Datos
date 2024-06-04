import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPatient } from '../../../Interfaces/Register';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrl: './add-record.component.css'
})
export class AddRecordComponent {

  form!: FormGroup;
  editingRow: boolean[] = [];
  rows = [
  { id: 1, nombre_procedimiento: 'Procedimiento 1', tratamiento: 'Tratamiento 1', fecha_procedimiento: '2021-10-10', email_paciente: 'asd2@gmas.com' },
  { id: 2, nombre_procedimiento: 'Procedimiento 2', tratamiento: 'Tratamiento 2', fecha_procedimiento: '2021-10-10', email_paciente: 'asdas</gmas.com' },
  { id: 3, nombre_procedimiento: 'Procedimiento 3', tratamiento: 'Tratamiento 3', fecha_procedimiento: '2021-10-10', email_paciente: 'asdaj@mail.com' },
  ];

  constructor(private fb: FormBuilder, private service: PatientService) {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  ngOnInit(): void {

    this.form = this.fb.group({
    });
  }

  onRegister() {
    if (this.form.valid) {

      const request: RegisterPatient = {
        nombre: this.form.value.nombre,
        apellido1: this.form.value.apellido1,
        apellido2: this.form.value.apellido2,
        cedula: this.form.value.cedula,
        numeroTel: this.form.value.tel,
        provincia: this.form.value.provincia,
        canton: this.form.value.canton,
        distrito: this.form.value.distrito,
        nacimiento: this.form.value.nacimiento,
        patologias: this.form.value.patologias,
        tratamientos: this.form.value.tratamientos,
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.service.setPatient(request).subscribe({
        next: (data) => {
          if (data.status) {
            console.log(data.value);
          } else {
            console.log("Error");
          }
        }
      })
    } else {
      console.log("Formulario invalido");
    }
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
