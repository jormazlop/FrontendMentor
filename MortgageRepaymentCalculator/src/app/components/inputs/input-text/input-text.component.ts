import { Component, input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from '../input-error/input-error.component';


@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [ReactiveFormsModule, InputErrorComponent],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent extends AbstractInputComponent {

  type = input<'text' | 'number'>('text');

  suffix = input<string>();
  prefix = input<string>();

}
