import { Component } from "@angular/core";


@Component({
  selector: 'app-nav',
  templateUrl:'./navbar.component.html',
  styleUrl:'./navbar.component.css'
})
export class NavbarComponent{
  item = {
    logo: '../..//public/assets/olympusLogo.png'
  };

  base = {
    geek: '../..//public/assets/griego.png'
  }

  isMenuOpen = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
