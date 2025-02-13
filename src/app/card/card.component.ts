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
      title: 'Entrenamiento Personalizado',
      description: 'Programas diseñados para alcanzar tus metas físicas.'
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Deporte+2',
      title: 'Yoga y Meditación',
      description: 'Equilibrio entre cuerpo y mente para una vida saludable.'
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Deporte+3',
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
