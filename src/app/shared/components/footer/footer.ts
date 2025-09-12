import { SocialLink, SOCIALLINKS } from './../../models/interfaces/social-link';
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  allSocialLinks = signal<SocialLink[]>(SOCIALLINKS);
  now = signal(new Date());
  year = computed(() => this.now().getFullYear());
}
