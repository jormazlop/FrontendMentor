import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonCategories } from '@shared/buttons/button-categories/button-categories';
import { ButtonShuffle } from '@shared/buttons/button-shuffle/button-shuffle';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'study-card-header',
  imports: [ButtonCategories, FormsModule, ButtonShuffle],
  templateUrl: './study-card-header.html',
  styleUrl: './study-card-header.scss',
})
export class StudyCardHeader {
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
