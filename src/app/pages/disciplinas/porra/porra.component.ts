import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-porra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './porra.component.html',
  styleUrl: './porra.component.css'
})
export class PorraComponent {
  title = 'Porra'
  description = 'Un deporte de alto rendimiento, la animacion integra difetentes tecnicas y disciplinas como la gimnasia, el baile y las acrobacias en una rutina. Requiere un alto nivel de disciplina, resistencia y concentracion para llevarse acabo con precision. Si bien en su mayoria los equipos son femeniles, tambien contamos con categorias mixtas en diferentes niveles, desde basicos hasta los niveles mas avanzados.'
  contexto = 'En Olympus podras encontrar que la animacion es una de nuestras actividades principales. Te acompañaremos paso a paso hasta alcanzar tu maximo potencial'

}
