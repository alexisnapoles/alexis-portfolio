import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  loading = input<boolean>(false);
  disabled = input<boolean>(false);

  onClick = output<void>();
}
