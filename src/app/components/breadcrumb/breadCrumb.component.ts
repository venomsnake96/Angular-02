import { BreadcrumbService } from './breadCrumb.service';
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Breadcrumb } from './breadCrumb.model';

@Component({
  selector:'app-breadcrumb',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl:'./breadCrumb.component.html',
  styleUrl:'./breadCrumb.component.css'
})

export class BreadcrumbComponent {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
