import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { TabSelect } from '@shared/tab/tab';
import { CategoryModel, FlashcardModel } from 'model/flashcard.model';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  private readonly _cards = signal<FlashcardModel[]>([]);
  cards = this._cards.asReadonly();

  private readonly _tab = signal<TabSelect>('Study Mode');
  tab = this._tab.asReadonly();

  categories = computed<CategoryModel[]>(() => {
    return this._cards().reduce((acc, card) => {
      const index = acc.findIndex(c => c.category == card.category)
      if(index == -1) {
        acc.push({category: card.category, total: 1});
      } else {
        acc[index] = {category: card.category, total: ++acc[index].total};
      }
      return acc.sort((a,b) => a.category.localeCompare(b.category));
    }, [] as CategoryModel[])
  });

  private readonly http = inject(HttpClient);

  setTab(tab: TabSelect): void {
    this._tab.set(tab);
  }

  getData(): void {
    const url = '../../../data/data.json';
    this.http.get<FlashcardModel[]>(url).subscribe((data) => this._cards.set(data));
  }
}
