import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { expand } from "rxjs";

@Component( {
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeLine.component.html',
  styleUrl: './timeLine.component.css'
})

export class TimelineComponent implements OnInit {
  timelineItem = [
    {
      title: 'Evento 1',
      description: 'descripcion del evento',
      expanded: false
    },
    {
      title: 'Evento 2',
      description: 'descripcion del evento',
      expanded: false
    },
    {
      title: 'Evento 3',
      description: 'descripcion del evento',
      expanded: false
    },
    {
      title: 'Evento 4',
      description: 'descripcionn del evento',
      expanded: false
    },
    {
      title: 'Evento 5',
      description: 'descripcion del evento',
      expanded: false
    },
    {
      title: 'Evento 6',
      description: 'descripcion del evento',
      expanded: false
    }
  ];

  constructor(private elementRef: ElementRef) {}

  toggleItem(index: number): void {
    this.timelineItem[index].expanded = !this.timelineItem[index].expanded
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    this.animateTimelineLine();
  }

  animateTimelineLine(): void {
    const timelineLine = document.getElementById('timeline-line');
    if(timelineLine) {
    const timelineElement = this.elementRef.nativeElement.querySelector('.timeline')
    const timelineRect = timelineElement.getBoundingClientRect();
    const scrollPosition = window.scrollY || window.pageYOffset;
    const timelineTop = timelineRect.top + scrollPosition;
    const timelineBottom = timelineTop + timelineRect.heigth;
    const scrollProgress = (scrollPosition - timelineTop) / timelineRect.heigth;

    if (scrollPosition >= timelineTop && scrollPosition <= timelineBottom)
    {
      timelineLine.style.transform = `scaleY(${scrollProgress})`;
    }else if(scrollPosition < timelineTop){
      timelineLine.style.transform = 'scaleY(0)';
    }else if (scrollPosition > timelineBottom){
      timelineLine.style.transform = 'scaleY(1)';
    }
    }
  }

 ngOnInit(): void {
  this.animateTimelineLine()
 }
}
