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
    routeLink: 'gestion-prof'
  },
  {
    label: 'Gestión del personal',
    icon: 'fal fa-user-plus',
    routeLink: 'gestion-personal'
  },
  {
    label: 'Restablecimiento de contraseña',
    icon: 'fal fa-key',
    routeLink: 'rst-pwd'
  },

  {
    routeLink: '',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
