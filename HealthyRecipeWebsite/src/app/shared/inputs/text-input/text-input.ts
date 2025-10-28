import { Component, input } from '@angular/core';
import { AbstractInput } from '../abstract-input/abstract-input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput extends AbstractInput {
  placeholder = input.required<string>();

  onValueChange(): void {
    this.onChange(this.innerControl.value);
  }

}
