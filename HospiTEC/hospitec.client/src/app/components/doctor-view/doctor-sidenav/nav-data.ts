import { RouterLink } from "@angular/router";

export const navbarData = [
  {
    routeLink: 'add-patient',
    icon: 'fal fa-address-book',
    label: 'Agregar Paciente'
  },
  {
    routeLink: 'add-record',
    icon: 'fal fa-file-medical',
    label: 'Agregar Historial'
  },
  {
    routeLink: '../doctor-login',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
