import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result-separator',
  standalone: true,
  imports: [],
  templateUrl: './result-separator.component.html',
  styleUrl: './result-separator.component.scss'
})
export class ResultSeparatorComponent {
  partOfSpeech = input<string>();
}
