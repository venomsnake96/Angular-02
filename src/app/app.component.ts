import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navBar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent, NavbarComponent, RouterOutlet],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
