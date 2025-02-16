import { Component} from "@angular/core";

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html' ,
  styleUrl:'./card.component.css'
})

export class CardComponent{
  carouselItems: CarouselItem[] = [
    {
      image: '../..//public/assets/planifica.jpg',
      title: 'El deporte en la vida diaria',
      description: 'Mas alla de la practica del deporte como hobbie o disciplina, este debe ser considerado en la vida diaria, es una actividad que tiene un impacto significativo en las personas, proporcionando beneficios tanto fisicos como mentales. - El deporte forma a las personas para la vida, fomenta la competencia con uno mismo y el trabajo en equipo, asi como la voluntad de resolver retos y problemas - '
    },
    {
      image: '../..//public/assets/karete.jpg',
      title: 'El deporte como disciplina',
      description: 'Equilibrio entre cuerpo y mente para una vida saludable.'
    },
    {
      image: '../..//public/assets/BROWN.jpg',
      title: 'Nutrición Deportiva',
      description: 'Alimentación adecuada para maximizar tu rendimiento.'
    }
  ];

  currentIndex = 0;
  private intervalId: any; // Para almacenar el ID del intervalo

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide(); // Limpiar el intervalo cuando el componente se destruye
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000); // Cambia de slide cada 3 segundos (3000 ms)
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Detener el intervalo
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  pauseAutoSlide() {
    this.stopAutoSlide();
  }

  resumeAutoSlide() {
    this.startAutoSlide();
  }
}
