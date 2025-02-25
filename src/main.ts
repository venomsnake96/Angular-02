import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AboutComponent } from './app/pages/about/about.component';
import { HomeComponent } from './app/pages/home/home.component';
import { GymnasticsComponent } from './app/pages/disciplinas/gimnasia/gimnasia.component';
import { PorraComponent } from './app/pages/disciplinas/porra/porra.component';
import { DisciplinasComponent } from './app/pages/disciplinas/disciplinas.component';

const routes: Routes = [
  {path: '',title:'Inicio', component: HomeComponent},
  {path: 'about', title:'Nosotros', component:AboutComponent},
  {path: 'disciplinas', title:'Disciplinas', component: DisciplinasComponent,
    children: [
      {path:'gimnasia', title: 'Gimnasia', component:GymnasticsComponent},
      {path: 'porra', title: 'Porra', component: PorraComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)],})
  .catch((err) => console.error(err));
