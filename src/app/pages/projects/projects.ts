import { ProjectInterface, PROJECTLIST } from './../../shared/models/interfaces/project-interface';
import { Component, signal } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  allProjects = signal(PROJECTLIST);

  onProjectOpened(project: ProjectInterface): void {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  }
}
