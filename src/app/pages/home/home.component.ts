import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "../../card/card.component";

@Component({
  selector:'app-home',
  standalone:true,
  imports:[CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css',
})
export class HomeComponent {}
