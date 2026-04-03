import { Component, input } from '@angular/core';

@Component({
  selector: 'payapi-button-tertiary',
  imports: [],
  templateUrl: './button-tertiary.html',
  styleUrl: './button-tertiary.scss',
})
export class ButtonTertiary {
  disabled = input(false);
}
