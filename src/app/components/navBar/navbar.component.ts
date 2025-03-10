import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./navbar.component.html',
  styleUrl:'./navbar.component.css'
})
export class NavbarComponent{
  item = {
    logo: '../..//public/assets/olympusLogo.png'
  };

  isMenuOpen = false;
  isDropdownOpen: boolean[] = [false, false, false, false]
  isNavLinksTwoVisible = false

  toggleNavlinksTwo(){
    this.isNavLinksTwoVisible = !this.isNavLinksTwoVisible
  }

  openDropdown(index: number){
    this.isDropdownOpen[index] = true
  }

  closeDropdown(index: number) {
    this.isDropdownOpen[index] = false
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
