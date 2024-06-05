import { RouterLink } from "@angular/router";

export const navbarData = [
  {
    label: 'Historial clínico',
    icon: 'fal fa-desktop',
    routeLink: 'historial-view'
  },
  {
    label: 'Gestión de reservaciones',
    icon: 'fal fa-calendar-alt',
    routeLink: 'gestion-reservacion'
  },
  {
    label: 'Restablecimiento de contraseña',
    icon: 'fal fa-key',
    routeLink: ''
  },
  {
    label: 'Evaluar Servicio',
    icon: 'fal book',
    routeLink: 'patient-report'
  },
  {
    routeLink: '',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
