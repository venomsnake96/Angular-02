import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector:'app-service',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./servic.component.html',
  styleUrl:'./servic.component.css'
})
export class ServiceComponent{
  tileText = 'ACTIVIDADES';
  isSpanish = true;

  constructor(){
   setInterval(() => {
     this.isSpanish = !this.isSpanish;
     this.tileText = this.isSpanish ? 'ACTIVIDADES' : 'ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ';
   },2000)
  }
}
