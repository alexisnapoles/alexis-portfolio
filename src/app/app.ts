import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { StickySideIcons } from './shared/components/sticky-side-icons/sticky-side-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, StickySideIcons],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
