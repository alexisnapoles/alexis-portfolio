import { ProjectInterface } from './../../shared/models/interfaces/project-interface';
import { Component, signal } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = signal<ProjectInterface[]>([]);

  constructor() {
    // get projects from project interface
    this.projects.set([]);
  }
}
