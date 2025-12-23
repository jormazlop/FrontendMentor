import { Component, computed, inject, signal } from '@angular/core';
import { FlashcardAll } from 'flashcard-all/flashcard-all';
import { FlashcardStudy } from 'flashcard-study/flashcard-study';
import { Header } from 'layout/header/header';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'app-root',
  imports: [Header, FlashcardAll, FlashcardStudy],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FlashCardApp');
  private readonly service = inject(FlashcardService);
  studyMode = computed(() => this.service.tab() === 'Study Mode');
  allMode = computed(() => !this.studyMode());
}
