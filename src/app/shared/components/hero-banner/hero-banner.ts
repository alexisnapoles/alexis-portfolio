import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-hero-banner',
  imports: [Button],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  protected openResume(): void {
    window.open('https://drive.google.com/file/d/1UpszizUafgvKQRX56f-lt0609QlXn41o/view', '_blank');
  }

  protected sayHello(): void {
    window.location.href = 'mailto:alexisndelatorre@gmail.com';
  }
}
