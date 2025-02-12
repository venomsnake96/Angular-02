import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  template: `<app-card [title]="data.title" [header]="info.title" [info]="text.contenido">`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title: 'OlympusSport'
  };

  info = {
    title: 'El deporte, una forma de vivir'
  }

  text = {
    contenido: 'mas alla del deporte como disciplina. La actividad fisica constante es sinonimo de bienestar y calidad de vida'
  }




}
