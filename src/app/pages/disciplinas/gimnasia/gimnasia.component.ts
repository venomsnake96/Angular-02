import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector:'app-gymnastics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gimnasia.component.html',
  styleUrl: './gimnasia.componet.css'
})
export class GymnasticsComponent {
  title = 'Gimnasia'
  description = ''
  contexto = ''
}
