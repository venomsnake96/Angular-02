import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-trainig',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './entrenamiento.component.html',
  styleUrl: './entrenamiento.component.css'
})
export class TrainigComponent{
  title = 'Programas de entrenamiento'
  description = 'Enfocado en el area de la animación, los programas de entrenamiento, no competitivo, competitivo loca y competitivo internacional. Buscan ofrecer una ampliagama de enfoque relacionad al deporte.'
  contexto = 'En olymous estamos convensidos de que encontraras elmprograma que mejor se adapte a tu ritmo y a tus objetivos. Desde una activida fisica que ayude con tu bienestar. Hasta programas de entrenamiento enfocados en la competitividad en diferentes niveles, ideados para llevarte a tu maximo potencial como atleta'
}
