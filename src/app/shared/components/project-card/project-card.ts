import { ProjectInterface } from './../../models/interfaces/project-interface';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<ProjectInterface>();
  openProject = output<ProjectInterface>();

  onOpenProject(): void {
    this.openProject.emit(this.project());
  }
}
