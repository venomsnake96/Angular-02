import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navBar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadCrumb.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, BreadcrumbComponent, FooterComponent , RouterOutlet],
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
