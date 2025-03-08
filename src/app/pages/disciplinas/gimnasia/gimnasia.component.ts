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
      title: 'Gimnasia Ritmica',
      description: 'En esta modalidad, las gimnastas realizan rutinas con música en un piso de 13 x 13 metros, donde el aparato debe estar en constante movimiento y se incluyen elementos de gran amplitud con y sin giros, saltos, lanzamientos y captura de implementos. La gimnasia rítmica requiere un alto nivel de fuerza física, flexibilidad, coordinación y expresividad corporal.',
      icon: '../../../..//public/assets/boombox.svg',
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
