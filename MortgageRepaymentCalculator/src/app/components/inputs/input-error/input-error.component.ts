import { Component, computed, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [],
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.scss'
})
export class InputErrorComponent {

  errors = input.required<ValidationErrors>();

  controlErrors = computed(() => Object.keys(this.errors()))
}
