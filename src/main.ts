import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AboutComponent } from './app/pages/about/about.component';
import { ServiceComponent } from './app/pages/servic/servic.component';
import { HomeComponent } from './app/pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: '**', redirectTo: ''}
];

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)],})
  .catch((err) => console.error(err));
