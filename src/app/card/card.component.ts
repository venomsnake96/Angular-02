import { Component } from "@angular/core";

export interface CardItem {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector:'app-card',
  standalone: true,
  templateUrl:'./card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent{
 cardItems: CardItem[] = [
  {
    image:'../..//public/assets/olympusOne.JPG',
    title:'MISIÓN',
    description: 'Brindar un espacio seguro y confortable en un entorno amigable donde todos tengan la libertad de ser ellos mismos desarrollando sus valores y habilidades a través del deporte.'
  },
  {
    image:'../..//public/assets/olympusAweasome.JPG',
    title: 'VISIÓN',
    description:'Ser el programa líder del cheerleading y gimnasia artística a nivel nacional en México.'
  },
 ]


}
