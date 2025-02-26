import { Component} from "@angular/core";

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-card',
  templateUrl:'./cardOne.component.html' ,
  styleUrl:'./cardOne.component.css'
})

export class CarouselComponent{
  carouselItems: CarouselItem[] = [
    {
      image: '../..//public/assets/olympus.JPG',
      title: 'EL DEPORTE EN LA VIDA DIARIA',
      description: 'Mas alla de la practica del deporte como hobbie o disciplina, este debe ser considerado en la vida diaria, es una actividad que tiene un impacto significativo en las personas, proporcionando beneficios tanto fisicos como mentales. - El deporte forma a las personas para la vida, fomenta la competencia con uno mismo y el trabajo en equipo, asi como la voluntad de resolver retos y problemas',
    },
    {
      image: '../..//public/assets/olympusjump.JPG',
      title: 'DISCIPLINA EN EL DEPORTE',
      description: 'Debido a su naturaleza estructurada y reglamentada que promueve valores como la disciplina, la perseverancia y la colaboracion. En el ambito deportivo, la disciplina se refiere al nivel de compromiso, respeto y evolución que presenta un atleta en sunrespectivo deporte.'
    },
    {
      image: '../..//public/assets/BROWN.jpg',
      title: 'NUTRICION DEPORTIVA',
      description: 'Una dieta adecuada proporciona los nutrientes necesarios para mantener y reparar los tejidos, especialmente los musculares, y asegura una hidratación adecuada. Una alimentació equilibrada y adaptada a las necesidades individuales del deportista en escencial para el rendimiento y la recuperación optima'
    },
    {
      image:'../../..//public/assets/sportsForAll.png',
      title: 'DEPORTE PARA TODOS',
      description:'El deporte ademas de una disciplina o un hobbie, tambien es una herramienta de gran utilidad en el campo de la rehabilitacion fisica y el desarrollo de las habilidades tanto fisicas como mentales en personas con capacidades diferentes.'
    }
  ];
}
