import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { EMPTY, catchError, finalize, throwError } from 'rxjs';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private httpClient = inject(HttpClient);

  private URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  private error = signal(false);
  readonly error$ = this.error.asReadonly();
  private loading = signal(false);
  readonly loading$ = this.loading.asReadonly();
  private wordResult = signal<Word | null>(null);
  readonly wordResult$ = this.wordResult.asReadonly();

  private word = signal('');
  readonly word$ = this.word.asReadonly();

  searchWord(word: string | null = ''): void {
    this.word.set(word || '');
    this.wordResult.set(null);
    this.loading.set(true);
    this.error.set(false);

    this.httpClient
      .get<Word[]>(this.URL + word)
      .pipe(
        catchError((error) => {
          this.error.set(true);
          return EMPTY;
        }),
        finalize(() => this.loading.set(false))
      )
      .subscribe((words: Word[]) => {
        this.wordResult.set(words[0]);
      });
  }
}
