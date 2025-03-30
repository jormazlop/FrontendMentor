import { Component, computed, inject, signal } from '@angular/core';
import { LetterBarComponent } from '../../components/letter-bar/letter-bar.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-letter-density',
  imports: [LetterBarComponent],
  templateUrl: './letter-density.component.html',
  styleUrl: './letter-density.component.scss'
})
export class LetterDensityComponent {
  characters = inject(CharacterService).characters;
  total = computed(() => this.characters().split('').filter(c => c.trim()).length);

  seeMore = signal(false);

  seeMorePlaceholder = computed(() => this.seeMore() ? 'See Less' : 'See More')

  list = computed(() => {
    const charList = this.characters().split('').filter(c => c.trim());
    const characters = new Map<string, number>();
    charList.forEach(c => {
      let lastValue = characters.get(c) ?? 0;
      characters.set(c, ++lastValue);
    });

    const charactersSort = new Map([...characters.entries()].sort((a, b) => b[1] - a[1]));

    return this.seeMore() ? [...charactersSort.entries()] : [...charactersSort.entries()].slice(0, 5);
  });


  onClickSeeMore(): void {
    this.seeMore.update(val => !val);
  }
}
