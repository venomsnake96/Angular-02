import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navBar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadCrumb.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, BreadcrumbComponent, RouterOutlet],
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
