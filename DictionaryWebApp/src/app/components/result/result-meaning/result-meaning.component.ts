import { Component, inject, input } from '@angular/core';
import { Meaning } from '../../../models/word.model';
import { ResultSeparatorComponent } from '../result-separator/result-separator.component';
import { ExamplePipe } from '../../../pipes/example.pipe';
import { SynonimsPipe } from '../../../pipes/synonims.pipe';
import { WordService } from '../../../services/word.service';

@Component({
  selector: 'app-result-meaning',
  standalone: true,
  imports: [ResultSeparatorComponent, ExamplePipe, SynonimsPipe],
  templateUrl: './result-meaning.component.html',
  styleUrl: './result-meaning.component.scss'
})
export class ResultMeaningComponent {

  meanings = input<Meaning[]>();

  wordService = inject(WordService);

  onClick(synonim: string) {
    this.wordService.searchWord(synonim);
  }

}
