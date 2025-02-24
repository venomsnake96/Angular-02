import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GymnasticsComponent } from "./gimnasia/gimnasia.component";
import { RouterModule } from "@angular/router";
import { PorraComponent } from "./porra/porra.component";

@Component({
  selector:'app-service',
  standalone:true,
  imports:[CommonModule, RouterModule, GymnasticsComponent, PorraComponent],
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
