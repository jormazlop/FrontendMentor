import { Component, input, signal } from '@angular/core';
import { AbstractInput } from '../abstract-input/abstract-input';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutside } from '@shared/directives/click-outside';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.html',
  styleUrl: './select-input.scss',
  imports: [ReactiveFormsModule, ClickOutside]
})
export class SelectInput extends AbstractInput {

  id = Math.random() * 1000;

  placeholder = input.required<string>();

  values = input.required<number[]>();

  open = signal(false);

  openOptions(): void {
    this.open.set(true);
  }

  closeOptions(): void {
    this.open.set(false);
  }

  onClear(): void {
    this.innerControl.setValue(null);
  }
}
