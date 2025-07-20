import { Component, input } from '@angular/core';

@Component({
  selector: 'app-keyboard-letter',
  imports: [],
  templateUrl: './keyboard-letter.html',
  styleUrl: './keyboard-letter.scss'
})
export class KeyboardLetter {
  letter = input.required<string>();
  disabled = input.required<boolean>();
}
