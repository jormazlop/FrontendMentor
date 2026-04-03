import { Component, input } from '@angular/core';

@Component({
  selector: 'payapi-button-secondary',
  imports: [],
  templateUrl: './button-secondary.html',
  styleUrl: './button-secondary.scss',
})
export class ButtonSecondary {
  disabled = input(false);
}
