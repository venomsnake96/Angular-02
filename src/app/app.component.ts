import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navBar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, RouterOutlet],
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
