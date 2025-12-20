import { Component, inject } from '@angular/core';
import { ButtonCategories } from '@shared/buttons/button-categories/button-categories';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'study-card-header',
  imports: [ButtonCategories],
  templateUrl: './study-card-header.html',
  styleUrl: './study-card-header.scss',
})
export class StudyCardHeader {
  private readonly service = inject(FlashcardService);
  categories = this.service.categories;
}
