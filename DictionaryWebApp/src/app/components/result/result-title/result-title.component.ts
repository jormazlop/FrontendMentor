import { Component, computed, input } from '@angular/core';
import { Phonetic } from '../../../models/word.model';

@Component({
  selector: 'app-result-title',
  standalone: true,
  imports: [],
  templateUrl: './result-title.component.html',
  styleUrl: './result-title.component.scss'
})
export class ResultTitleComponent {

  word = input<string>();
  phonetics = input<Phonetic[]>();

  phonetic = computed<Phonetic>(() => {
    return this.phonetics()?.find(p => p.audio) || this.phonetics()?.[0] || {} as Phonetic;
  });

  onClickAudio(): void {
    const audio = new Audio();
    audio.src = this.phonetic().audio!;
    audio.load();
    audio.play();
  }

}
