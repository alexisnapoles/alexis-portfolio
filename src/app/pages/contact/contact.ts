import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../shared/components/button/button';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = signal(false);
  // not necessary; mejo redundant. search for: [.patch, .prestine, .dirty]
  sendBlankInput = signal(false);
  loading = signal(false);

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get formInput() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.sendBlankInput.set(true);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    // real world: not needed; when API used setTimeout must not be used;
    setTimeout(() => {
      this.submitted.set(true);
      this.loading.set(false);
      this.contactForm.reset();
      this.sendBlankInput.set(false);
    }, 1500);
  }
}
