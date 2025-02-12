import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title: 'OlympusSport'
  };

  onButtonClicked(){
    alert('Hello from Angular')
  }

  onKeyUp(newTitle: string){
    this.data.title =newTitle
  }
}
