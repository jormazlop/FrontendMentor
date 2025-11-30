import { Component, signal } from '@angular/core';
import { AbstractInput } from '../abstract-input/abstract-input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-input',
  imports: [FormsModule],
  templateUrl: './textarea-input.html',
  styleUrl: './textarea-input.scss',
})
export class TextareaInput extends AbstractInput {
  touched = signal(false);

  onTouch(): void {
    this.touched.set(true);
  }
}
