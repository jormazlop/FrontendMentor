import { Component, input } from '@angular/core';

@Component({
  selector: 'app-play-letter',
  imports: [],
  templateUrl: './play-letter.html',
  styleUrl: './play-letter.scss',
  host: {
   '[class.espace]':"letter() === ' '"
  }
})
export class PlayLetter {
  letter = input.required<string>();

  disabled = input.required<boolean>();
}
