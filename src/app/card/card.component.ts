import { Component, input } from "@angular/core";

function toCapitalize (text:string): string{
  if(!text) return '';

  return text.charAt(0).toUpperCase() + text.slice(1)
}


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl:'./card.component.css'
})

export class CardComponent{
  name = input.required<string, string>({
    alias: 'title',
    transform: toCapitalize,
  })

  header = input.required<string, string>({
    transform: toCapitalize,
  })

  info = input.required<string, string>({
    transform: toCapitalize,
  })


}
