import { Component, computed, input, signal } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconShowComponent } from '@icons/icon-show/icon-show.component';
import { IconInfoCircleComponent } from '@icons/icon-info-circle/icon-info-circle.component';

@Component({
  selector: 'note-input-password',
  imports: [ReactiveFormsModule, IconShowComponent, IconInfoCircleComponent],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent extends AbstractInputComponent {
  label = input<string>('Change Label');

  hint = input<string>('');

  show = signal(false);

  type = computed(() => this.show() ? 'text' : 'password');

  showPassword(): void {
    this.show.update(val => !val)
  }
}
