import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-infocard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardInfo.component.html',
  styleUrl: './cardInfo.component.css'
})
export class InfoCardComponent {
  @Input() item: {
    title: string,
    description: string,
    icon: string,
    hoverImage: string
  } = {
    title: '',
    description: '',
    icon: '',
    hoverImage: ''
  };

  isHovered: boolean = false;

  onHover(hover: boolean) : void {
    this.isHovered = hover
  }
}
