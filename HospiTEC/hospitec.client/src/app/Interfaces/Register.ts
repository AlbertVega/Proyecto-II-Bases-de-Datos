export interface RegisterPatient {
  nombre: string;
  apellido1: string;
  apellido2: string;
  cedula: number;
  numeroTel: number;
  provincia: string;
  canton: string;
  distrito: string;
  nacimiento: Date;
  patologias: string;
  tratamientos: string;
  email: string;
  password: string;
}
