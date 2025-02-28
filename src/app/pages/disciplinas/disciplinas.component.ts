import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";



@Component({
  selector:'app-diciplinas',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl:'./disciplinas.component.html',
})
export class DisciplinasComponent{

}

