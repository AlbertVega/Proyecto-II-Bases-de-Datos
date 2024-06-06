import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPatient } from '../../../Interfaces/Register';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: FormBuilder, private service: PatientService) {
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      cedula: ['', Validators.required],
      tel: ['', Validators.required],
      provincia: ['', Validators.required],
      canton: ['', Validators.required],
      distrito: ['', Validators.required],
      nacimiento: ['', Validators.required],
      patologias: [''],
      tratamientos: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
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
}
