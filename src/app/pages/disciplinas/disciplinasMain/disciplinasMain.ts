import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

export interface Carditem{
  image:string;
  title:string;
  description:string;
  route: string;
}

@Component({
  selector:'app-dmain',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './disciplinasMain.html',
  styleUrl: './disciplinasMain.css'
})

export class DiscMainComponent{
  tileText = 'ACTIVIDADES';
  isSpanish = true;

  constructor(){
   setInterval(() => {
     this.isSpanish = !this.isSpanish;
     this.tileText = this.isSpanish ? 'ACTIVIDADES' : 'ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ';
   },2000)
  }

  cardItems: Carditem[] = [
    {
      image:'../../..//public/assets/gimnasia.png',
      title:'Gimnasia',
      description:'Programa especializado en gimnasia aerobica y acrobatica, desde principiante hasta experto',
      route: '/disciplinas/gimnasia'
    },
    {
      image:'../../..//public/assets/olympusPorra.JPG',
      title: 'Porra',
      description:'De nuestoros principales programas, apto para todas las edades',
      route: '/disciplinas/porra'
    },
    {
      image: '../../..//public/assets/telas.png',
      title: 'Telas',
      description: 'Esta disciplina es adecuada para personas de diferentes edades y niveles de condición física',
      route: '/disciplinas/telas'
    },
    {
      image: '../../..//public/assets/cinICU.jpg',
      title: 'Competencias',
      description:'Contamos con programas de competencias locales e internacionales',
      route: '/disciplinas/entrenamiento'
    }
  ]
}
