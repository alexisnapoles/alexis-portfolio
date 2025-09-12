import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  loading = input<boolean>(false);
  disabled = input<boolean>(false);

  onClick = output<void>();

  public openNewTab(url: string): void {
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.opener = null;
    }
  }
}
