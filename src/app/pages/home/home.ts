import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { About } from '../about/about';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [HeroBanner, About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
