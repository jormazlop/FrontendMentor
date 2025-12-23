import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonCategories } from '@shared/buttons/button-categories/button-categories';
import { ButtonShuffle } from '@shared/buttons/button-shuffle/button-shuffle';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'flashcard-filter',
  imports: [ButtonCategories, FormsModule, ButtonShuffle],
  templateUrl: './flashcard-filter.html',
  styleUrl: './flashcard-filter.scss',
})
export class FlashcardFilter {
  private readonly service = inject(FlashcardService);
  categories = this.service.categories;

  hideMastered = model(false);

  effect = effect(() => {
    this.service.setHideMastered(this.hideMastered());
  })

  onShuffleCards(): void {
    this.service.onShuffleCards();
  }
}
