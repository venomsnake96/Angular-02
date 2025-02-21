import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CarouselComponent } from "../../carousel/carousel.component";

@Component({
  selector:'app-home',
  standalone:true,
  imports:[CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css',
})
export class HomeComponent {
  tileText = 'DEPORTE';
  isSpanish = true;

  constructor(){
   setInterval(() => {
     this.isSpanish = !this.isSpanish;
     this.tileText = this.isSpanish ? 'DEPORTE' : 'ΑΘΛΗΤΙΣΜΟΣ';
   },2000)
  }
}
