import { Component } from "@angular/core";
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from "@angular/common";
import { TimelineComponent } from "../../components/timeline/timeLine.component";



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent, CommonModule, TimelineComponent],
  templateUrl:'./about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent{
 tileText = 'BIENVENIDOS';
 isSpanish = true;

 constructor(){
  setInterval(() => {
    this.isSpanish = !this.isSpanish;
    this.tileText = this.isSpanish ? 'BIENVENIDOS' : 'ΚΑΛΩΣ ΗΡΘΑΤΕ';
  },2000)
 }

 misionImage: string = '../../..//public/assets/olympusOne.JPG'
 misionDescription: string = 'Brindar un espacio seguro y confortable en un entorno amigable donde todos tengan la libertad de ser ellos mismos desarrollando sus valores y habilidades a través del deporte.'

 visionImage: string = '../../..//public/assets/olympusAweasome.JPG'
 visionDescription: string = 'Ser el programa líder del cheerleading y gimnasia artística a nivel nacional en México.'

 filosofiaImage: string = '../../..//public/assets/olympusCuna.JPG'
 filosofiaDescription = 'Nuestra filosofía es tener un lugar seguro y amigable para que cada uno de nuestros alumnos se desarrolle logrando sus objetivos personales.'


}
