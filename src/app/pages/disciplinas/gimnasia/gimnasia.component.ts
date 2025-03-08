import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InfoCardComponent } from "../../../components/cardInfo/cardInfo.component";

@Component({
  selector:'app-gymnastics',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './gimnasia.component.html',
  styleUrl: './gimnasia.component.css'
})
export class GymnasticsComponent {
  title = 'Gimnasia'
  description = 'Actividad física que busca mantener una buena forma física a través de ejercicios que implican fuerza, flexibilidad, agilidad y control corporal. Se practica tanto como deporte competitivo como actividad recreativa y se divide en varias disciplinas, como la gimnasia artística, rítmica y acrobática.'
  contexto = 'En Olympus nos especializamos en la gimnacia ritmica y acrobatica. Adems de la practica individualizada de las disciplinas mencionadas, el programa de entrenamiento tiene como finalidad la integración a nuestro programa de animación'

  cards = [
    {
      title: 'Gimnasia Aerobica',
      description: 'En la gimnasia aeróbica, el deportista debe ejecutar una rutina con movimientos intensos y empleando distintos elementos de dificultad. En su accionar tiene que evidenciar fuerza, flexibilidad y fluidez.',
      icon: '../../../..//public/assets/gymnast.svg',
      hoverImage: '../../../..//public/assets/gimnasiaBn.jpg'
    },
    {
      title: 'Gimnasia Acrobatica',
      description: 'La gimnasia acrobática es una disciplina gimnástica basada en rutinas que deben presentar giros, saltos y muestras de equilibrio y flexibilidad. Los ejercicios son realizados por equipos de entre dos y seis atletas, cuyos movimientos deben ser coordinados y armónicos.',
      icon: '../../../..//public/assets/gimnasia.svg',
      hoverImage: '../../../..//public/assets/gimnasia.png'
    }
  ]
}
