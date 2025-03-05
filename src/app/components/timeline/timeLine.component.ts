import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component( {
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeLine.component.html',
  styleUrl: './timeLine.component.css'
})

export class TimelineComponent {
  timelineItem = [
    {
      title: 'Evento 1',
      description: 'descripcion del evento'
    },
    {
      title: 'Evento 2',
      description: 'descripcion del evento'
    },
    {
      title: 'Evento 3',
      description: 'descripcion del evento'
    },
    {
      title: 'Evento 4',
      description: 'descripcionn del evento'
    }
  ]
}
