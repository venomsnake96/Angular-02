import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DiscMainComponent } from './pages/disciplinas/disciplinasMain/disciplinasMain';
import { GymnasticsComponent } from './pages/disciplinas/gimnasia/gimnasia.component';
import { PorraComponent } from './pages/disciplinas/porra/porra.component';
import { TelasComponent } from './pages/disciplinas/telas/telas.component';
import { TrainigComponent } from './pages/disciplinas/entrenamiento/entrenamiento.component';


const routes: Routes = [
  {path: '',title:'Inicio', component: HomeComponent},
  {path: 'about', title:'Nosotros', component:AboutComponent},
  {path: 'disciplinas', title:'Disciplinas', component: DiscMainComponent,
    children: [
      {path: '', component:DiscMainComponent},
      {path:'gimnasia', title: 'Gimnasia', component:GymnasticsComponent},
      {path: 'porra', title: 'Porra', component: PorraComponent},
      {path: 'telas', title: 'Telas', component: TelasComponent},
      {path: 'entrenamiento', title:'Competencias', component:TrainigComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
