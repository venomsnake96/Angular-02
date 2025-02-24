import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AboutComponent } from './app/pages/about/about.component';
import { ServiceComponent } from './app/pages/servic/servic.component';
import { HomeComponent } from './app/pages/home/home.component';
import { GymnasticsComponent } from './app/pages/servic/gimnasia/gimnasia.component';
import { PorraComponent } from './app/pages/servic/porra/porra.component';

const routes: Routes = [
  {path: '',title:'Inicio', component: HomeComponent},
  {path: 'about', title:'Nosotros', component:AboutComponent},
  {path: 'service', title:'Servicios', component: ServiceComponent,
    children: [
      {path:'gimnasia', title: 'Gimnasia', component:GymnasticsComponent},
      {path: 'porra', title: 'Porra', component: PorraComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)],})
  .catch((err) => console.error(err));
