import { Component, computed, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { InputCheckboxComponent } from '../../components/input-checkbox/input-checkbox.component';

@Component({
  selector: 'app-character-textarea',
  imports: [FormsModule, InputCheckboxComponent],
  templateUrl: './character-textarea.component.html',
  styleUrl: './character-textarea.component.scss'
})
export class CharacterTextareaComponent {

  characters = model('');
  limit = model(0);
  private service = inject(CharacterService);
  readingTime = this.service.readingTime;
  charLimit = this.service.charLimit;
  limitError = computed(() => {
    console.log(this.limit())
    return this.charLimit() && this.limit() < this.characters().length
  });

  constructor() {
    effect(() => {
      this.service.setCharacters(this.characters());
    });
  }

  onClickExclude(value: boolean): void {
    this.service.setExcludeSpaces(value);
  }

  onClickLimit(value: boolean): void {
    this.service.setCharacterLimit(value);
  }

}
