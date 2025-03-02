import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navBar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadCrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, BreadcrumbComponent, FooterComponent , RouterOutlet, CommonModule ,LoadingComponent],
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 isLoading: boolean = false;

 constructor(private router: Router){
  this.router.events.subscribe((event: Event)=>{
    if(event instanceof NavigationStart) {
      this.isLoading = true;
    }else if (event instanceof NavigationEnd){
      this.isLoading = false;
    }
  });
 }

}
