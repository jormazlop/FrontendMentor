import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractInput } from '@inputs/abstract-input/abstract-input';

@Component({
  selector: 'app-toggle-input',
  imports: [ReactiveFormsModule],
  templateUrl: './toggle-input.html',
  styleUrl: './toggle-input.scss'
})
export class ToggleInput extends AbstractInput {
  constructor() {
    super();
  }
}
