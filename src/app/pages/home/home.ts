import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { ProjectInterface } from '../../shared/models/interfaces/project-interface';

@Component({
  selector: 'app-home',
  imports: [HeroBanner, About, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // private router = inject(Router);
  onProjectOpened(project: ProjectInterface): void {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  }
}
