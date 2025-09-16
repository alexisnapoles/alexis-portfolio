import { SocialLink, SOCIALLINKS } from './../../models/interfaces/social-link';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sticky-side-icons',
  imports: [],
  templateUrl: './sticky-side-icons.html',
  styleUrl: './sticky-side-icons.css',
})
export class StickySideIcons {
  sidebarIcons = signal(SOCIALLINKS);
}
