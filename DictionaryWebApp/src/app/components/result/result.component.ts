import { Component, input } from '@angular/core';
import { ResultTitleComponent } from './result-title/result-title.component';
import { Word } from '../../models/word.model';
import { ResultMeaningComponent } from './result-meaning/result-meaning.component';
import { ResultSourceComponent } from './result-source/result-source.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ResultTitleComponent, ResultMeaningComponent, ResultSourceComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  word = input<Word | null>();

}
