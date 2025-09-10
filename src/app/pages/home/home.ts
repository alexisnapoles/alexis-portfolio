import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { About } from '../about/about';
About;

@Component({
  selector: 'app-home',
  imports: [HeroBanner, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
