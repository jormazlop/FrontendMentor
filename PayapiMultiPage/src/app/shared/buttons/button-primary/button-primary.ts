import { Component, input } from '@angular/core';

@Component({
  selector: 'payapi-button-primary',
  imports: [],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  disabled = input(false);
}
