import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  technologies = signal<string[]>([
    'JavaScript',
    'TypeScript',
    'Angular',
    'HTML & CSS',
    'Tailwind CSS',
    'DaisyUI',
  ]);
}
