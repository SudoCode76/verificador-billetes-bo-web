import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'install',
    loadComponent: () => import('./pages/install/install.page').then((m) => m.InstallPage),
  },
];
