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
    label: 'Evaluar Servicio',
    icon: 'fal fa-star',
    routeLink: 'patient-report'
  },
  {
    routeLink: '',
    icon: 'fal fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
