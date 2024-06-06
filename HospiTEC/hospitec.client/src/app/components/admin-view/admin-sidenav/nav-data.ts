import { RouterLink } from "@angular/router";

export const navbarData = [
  {
    label: 'Gestión de salones',
    icon: 'fal fa-desktop',
    routeLink: 'gestion-salon'
  },
  {
    label: 'Gestión de equipo médico',
    icon: 'fal fa-tags',
    routeLink: 'gestion-equipo'
  },
  {
    label: 'Gestión de camas',
    icon: 'fal fa-bed',
    routeLink:'gestion-camas'
  },
  {
    label: 'Gestión de procedimientos medicos',
    icon: 'fal fa-users',
    routeLink: 'gestion-procedimientos'
  },
  {
    label: 'Gestión del personal',
    icon: 'fal fa-user-plus',
    routeLink: 'gestion-personal'
  },
  {
    label: 'Cargar Pacientes',
    icon: 'fal fa-file-upload',
    routeLink: 'excel-uploader'
  },
  {
    label: 'Reportes',
    icon: 'fal fa-chart-bar',
    routeLink: 'admin-reportes'
  },
  {
    routeLink: 'admin-login',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
