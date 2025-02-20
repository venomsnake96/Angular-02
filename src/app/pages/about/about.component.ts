import { Component } from "@angular/core";



@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl:'./about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent{
 tileText = 'BIENVENIDOS';
 isSpanish = true;

 constructor(){
  setInterval(() => {
    this.isSpanish = !this.isSpanish;
    this.tileText = this.isSpanish ? 'BIENVENIDOs' : 'ΚΑΛΩΣ ΗΡΘΑΤΕ';
  },2000)
 }
}
