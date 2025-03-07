import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InfoCardComponent } from "../../../components/cardInfo/cardInfo.component";

@Component({
  selector: 'app-trainig',
  standalone: true,
  imports:[CommonModule, InfoCardComponent],
  templateUrl: './entrenamiento.component.html',
  styleUrl: './entrenamiento.component.css'
})
export class TrainigComponent{
  title = 'Programas de entrenamiento'
  description = 'Enfocado en el area de la animación, los programas de entrenamiento, no competitivo, competitivo loca y competitivo internacional. Buscan ofrecer una amplia gama de enfoque relacionad al deporte.'
  contexto = 'En olympus estamos convensidos de que encontraras el programa que mejor se adapte a tu ritmo y a tus objetivos. Desde una activida fisica que ayude con tu bienestar. Hasta programas de entrenamiento enfocados en la competitividad en diferentes niveles, ideados para llevarte a tu maximo potencial como atleta'

  cards = [
    {
      title: 'No competivo',
      description: 'Diseñado para que el alumnado desarrolle habilidades psicomotrices y sociales, así como también arraigar el espíritu deportivo y valores de integridad.',
      icon: '../../../..//public/assets/person-arms-up.svg',
      hoverImage: '../../../..//public/assets/olympus.JPG'
    },
    {
      title: 'Competitivo Local',
      description: 'Además de las habilidades anteriormente mencionadas, en esta modalidad el alumno podrá experimentar las destrezas competitivas y la integración a un equipo donde fomentará relaciones interpersonales a través de nuestras diversas disciplinas, donde así mismo, el usuario se compromete a asistir con regularidad.',
      icon: '../../../..//public/assets/trophy.svg',
      hoverImage: '../../../..//public/assets/olympusjump.JPG'
    },
    {
      title: 'Competitivo Internacional',
      description: 'Adicionalmente al programa anterior, el integrarse a este involucra la oportunidad de alcanzar niveles deportivos de alto rendimiento e incluso abrirse paso a pertenecer al equipo de la Selección Nacional y en ese mismo camino participar en competencias internacionales.',
      icon: '../../../..//public/assets/globe-americas.svg',
      hoverImage: '../../../..//public/assets/cinICU.jpg'
    }
  ]
}
