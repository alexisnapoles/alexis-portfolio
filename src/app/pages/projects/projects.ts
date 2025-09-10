import { ProjectInterface } from './../../shared/models/interfaces/project-interface';
import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  public project: ProjectInterface[] = [
    {
      title: 'Project Management App',
      description: 'A web application to manage projects, tasks, and team collaboration.',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
    },
  ];
}
