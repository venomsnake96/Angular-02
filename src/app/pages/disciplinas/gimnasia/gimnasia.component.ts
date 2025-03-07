import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector:'app-gymnastics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gimnasia.component.html',
  styleUrl: './gimnasia.component.css'
})
export class GymnasticsComponent {
  title = 'Gimnasia'
  description = 'Actividad física que busca mantener una buena forma física a través de ejercicios que implican fuerza, flexibilidad, agilidad y control corporal. Se practica tanto como deporte competitivo como actividad recreativa y se divide en varias disciplinas, como la gimnasia artística, rítmica y acrobática.'
  contexto = 'En Olympus nos especializamos en la gimnacia ritmica y acrobatica. Adems de la practica individualizada de las disciplinas mencionadas, el programa de entrenamiento tiene como finalidad la integración a nuestro programa de animación'
}
