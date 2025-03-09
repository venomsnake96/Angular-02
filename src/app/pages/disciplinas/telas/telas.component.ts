import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-telas',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './telas.component.html',
  styleUrl:'./telas.component.css'
})
export class TelasComponent{
  title = 'Gimnasia Aerea';
  description = 'Disciplina artística y acrobática que combina elementos de gimnasia, danza y circo. Consiste en realizar movimientos, figuras y acrobacias en el aire utilizando una o dos telas colgadas desde un punto fijo en altura. Es una actividad que requiere fuerza, flexibilidad, coordinación y expresión artística.';
  contexto = 'Se emplean una o dos telas de tela elástica y resistente (generalmente de poliamida o nylon), que cuelgan de un soporte elevado, como un techo o una estructura especial. Las telas suelen tener entre 8 y 12 metros de largo, dependiendo de la altura del espacio.';

  
}
