import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector:'app-service',
  standalone:true,
  imports:[CommonModule, RouterModule],
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
