import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InfoCardComponent } from "../../../components/cardInfo/cardInfo.component";

@Component({
  selector: 'app-porra',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './porra.component.html',
  styleUrl: './porra.component.css'
})
export class PorraComponent {
  title = 'Porra'
  description = 'Un deporte de alto rendimiento, la animacion integra difetentes tecnicas y disciplinas como la gimnasia, el baile y las acrobacias en una rutina. Requiere un alto nivel de disciplina, resistencia y concentracion para llevarse acabo con precision. Si bien en su mayoria los equipos son femeniles, tambien contamos con categorias mixtas en diferentes niveles, desde basicos hasta los niveles mas avanzados.'
  contexto = 'En Olympus podras encontrar que la animacion es una de nuestras actividades principales. Te acompañaremos paso a paso hasta alcanzar tu maximo potencial'

  cards = [
    {
      title: 'Mixto Nivel 7',
      description: 'Representa un nivel avanzado y desafiante dentro del porrismo, destacándose por su combinación de habilidades técnicas, trabajo en equipo y diversidad de género. Es una división que requiere entrenamiento riguroso, disciplina y adherencia a las normas de seguridad.',
      icon: '../../../..//public/assets/zeus.svg',
      hoverImage: '../../../..//public/assets/olympusPorra.JPG'
    },
    {
      title: 'Femenil Nivle 7',
      description: 'Representa uno de los niveles más avanzados y exigentes dentro del porrismo femenino. Combina habilidades técnicas, trabajo en equipo y creatividad, requiriendo un entrenamiento riguroso y un compromiso constante con la seguridad y la excelencia.',
      icon:'../../../..//public/assets/athena.svg',
      hoverImage: '../../../..//public/assets/olympusFem.JPG'
    },
    {
      title: 'Prepa y Universidad Mixto Avanzado',
      description: 'Es una división emocionante y desafiante dentro del porrismo educativo, que combina habilidades avanzadas, trabajo en equipo y el orgullo de representar a una institución académica.' ,
      icon: '../../../..//public/assets/hermes.svg',
      hoverImage: '../../../..//public/assets/uachPiramide.JPG'
    }
  ]
}
