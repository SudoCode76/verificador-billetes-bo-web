import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    title: 'Verificador de Billetes BO — Detecta billetes fuera de circulación',
  },
  {
    path: 'install',
    loadComponent: () => import('./pages/install/install.page').then((m) => m.InstallPage),
    title: 'Cómo instalar — Verificador de Billetes BO',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    title: 'Contacto — Verificador de Billetes BO',
  },
];
