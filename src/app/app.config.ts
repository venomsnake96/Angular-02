import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.routes)
  },
  {
    path: 'about',
    title: 'Nosotros',
    loadChildren: () => import('./pages/about/about.routes').then(m => m.routes)
  },
  {
    path: 'disciplinas',
    title: 'Discipinas',
    loadChildren: () => import('./pages/disciplinas/disciplinas.routes').then(m => m.routes)
  },
  {path: '**', redirectTo: ''}
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
