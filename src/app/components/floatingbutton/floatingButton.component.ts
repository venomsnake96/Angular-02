import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-floating-button',
  standalone: true,
  templateUrl: './floatingButton.component.html',
  styleUrl: './floatingButton.component.css'
})
export class FloatingButtonComponent{
  @Input() phoneNumber: string = '5548210930';
  @Input() messege: string = 'Hola, quisiera mas informacion sobre sus porgrams de entrenamiento.';

  iconPath: string = '../../..//public/assets/envelope-plus.svg';
  imagePath: string = '../../..//public/assets/loadCircle.png'

  openWhatsApp(){
    const confirmSend = confirm('Are you sure about send this message?');
    if(confirmSend){
      const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.messege)}`;
      window.open(url, '_blank')
    }
  }
}

