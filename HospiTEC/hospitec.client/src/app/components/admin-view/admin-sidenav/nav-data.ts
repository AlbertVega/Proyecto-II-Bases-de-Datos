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
    routeLink: 'gestion-activo'
  },
  {
    label: 'Gestión de camas',
    icon: 'fal-tags ',
    routeLink:''
  },
  {
    label: 'Gestión de procedimientos medicos',
    icon: 'fal fa-users',
    routeLink: 'gestion-prof'
  },
  {
    label: 'Aprobación de personal',
    icon: 'fal fa-user-plus',
    routeLink: 'aprobacion-op'
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
    routeLink: '',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]
