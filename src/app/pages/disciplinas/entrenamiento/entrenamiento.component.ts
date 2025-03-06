import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SliderComponent } from "../../../components/cardslider/cardSlider.component";

@Component({
  selector: 'app-trainig',
  standalone: true,
  imports:[CommonModule, SliderComponent],
  templateUrl: './entrenamiento.component.html',
  styleUrl: './entrenamiento.component.css'
})
export class TrainigComponent{
  title = 'Programas de entrenamiento'
  description = 'Enfocado en el area de la animación, los programas de entrenamiento, no competitivo, competitivo loca y competitivo internacional. Buscan ofrecer una amplia gama de enfoque relacionad al deporte.'
  contexto = 'En olympus estamos convensidos de que encontraras el programa que mejor se adapte a tu ritmo y a tus objetivos. Desde una activida fisica que ayude con tu bienestar. Hasta programas de entrenamiento enfocados en la competitividad en diferentes niveles, ideados para llevarte a tu maximo potencial como atleta'

  sliderItems = [
    {
      title: 'No competitivo',
      image: '../../../..//public/assets/olympusOne.JPG',
      description: 'Diseñado para que el alumnado desarrolle habilidades psicomotrices y sociales, así como también arraigar el espíritu deportivo y valores de integridad.'
    },
    {
      title: 'Competitivo local',
      image: '../../../..//public/assets/olympusAweasome.JPG',
      description:'Además de las habilidades anteriormente mencionadas, en esta modalidad el alumno podrá experimentar las destrezas competitivas y la integración a un equipo donde fomentará relaciones interpersonales a través de nuestras diversas disciplinas, donde así mismo, el usuario se compromete a asistir con regularidad.'
    },
    {
      title: 'Competitivo Internacional',
      image: '../../../..//public/assets/cinICU.jpg',
      description: 'Adicionalmente al programa anterior, el integrarse a este involucra la oportunidad de alcanzar niveles deportivos de alto rendimiento e incluso abrirse paso a pertenecer al equipo de la Selección Nacional y en ese mismo camino participar en competencias internacionales.'
    }
  ]
}
