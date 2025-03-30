import { Component, computed, inject } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-counters',
  imports: [CounterComponent],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  characters = inject(CharacterService).chars;
  words = inject(CharacterService).words;
  sentences = inject(CharacterService).sentences;

  excludeSpaces = inject(CharacterService).excludeSpace;


  placeholder = computed(() => {
    return this.excludeSpaces() ? `Total Characters (no space)` : `Total Characters`;
  });
}
