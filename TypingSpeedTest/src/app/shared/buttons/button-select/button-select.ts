import { Component, input } from '@angular/core';

@Component({
  selector: 'button-select',
  imports: [],
  templateUrl: './button-select.html',
  styleUrl: './button-select.scss',
})
export class ButtonSelect {
  active = input<boolean>(false);
}
