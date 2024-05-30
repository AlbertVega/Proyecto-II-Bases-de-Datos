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
    icon: 'fal-tags ',
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
    icon: 'fal id-card-o',
    routeLink: 'excel-uploader'
  },
  {
    label: 'Reportes',
    icon: 'fal book',
    routeLink: 'admin-reportes'
  },
  {
    label: 'Restablecimiento de contraseña',
    icon: 'fal fa-key',
    routeLink: 'rst-pwd'
  },

  {
    routeLink: 'admin-login',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
