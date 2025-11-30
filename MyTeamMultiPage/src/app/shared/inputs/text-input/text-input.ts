import { Component, signal } from '@angular/core';
import { AbstractInput } from '../abstract-input/abstract-input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [FormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput extends AbstractInput {

  touched = signal(false);

  onTouch(): void {
    this.touched.set(true);
  }
}
