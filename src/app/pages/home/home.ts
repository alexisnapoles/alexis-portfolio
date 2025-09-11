import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [HeroBanner, About, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
