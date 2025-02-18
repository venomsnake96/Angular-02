import { Component } from "@angular/core";

export interface AboutItem {
  title: string;
  infor: string;
}

@Component({
  selector: 'app-about',
  templateUrl:'./about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent{
  aboutItems: AboutItem[] = [
    {
      title: 'NUESTRA FILOSOFIA',
      infor: 'Nuestra filosofía es tener un lugar seguro y amigable para que cada uno de nuestros alumnos se desarrolle logrando sus objetivos personales.'
    },
    {
      title: 'MISIÓN',
      infor: 'Brindar un espacio seguro y confortable en un entorno amigable donde todos tengan la libertad de ser ellos mismos desarrollando sus valores y habilidades a través del deporte.'
    }
  ]
}
