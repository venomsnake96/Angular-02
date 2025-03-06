import { CommonModule } from "@angular/common";
import { Component, Input} from "@angular/core";

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cardSlider.component.html',
  styleUrl: './cardSlider.component.css'
})
export class SliderComponent {
@Input() items: any[] = [];
activeIndex: number = 0;

setActive(index: number): void {
  this.activeIndex = index
}


}
