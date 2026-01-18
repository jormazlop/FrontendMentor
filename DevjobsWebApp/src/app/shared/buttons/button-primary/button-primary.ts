import { Component, input } from '@angular/core';

@Component({
  selector: 'button-primary',
  imports: [],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  disabled = input(false);
}
