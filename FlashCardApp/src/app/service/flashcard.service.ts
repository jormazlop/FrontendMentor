import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { TabSelect } from '@shared/tab/tab';
import { CategoryModel, FlashcardModel } from 'model/flashcard.model';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  private readonly _cards = signal<FlashcardModel[]>([]);
  private readonly _filteredCards = computed(() => {

    const cards = this._cards().filter(card => this._hideMastered() ? card.knownCount != 5 : true);

    return cards.filter((card) =>
      this._selectedCategories().length ? this._selectedCategories().includes(card.category) : true
    );
  });
  private readonly _index = signal(0);
  private readonly _hideMastered = signal(false);
  index = this._index.asReadonly();
  total = computed(() => this._filteredCards().length);
  statTotal = computed(() => this._cards().length);
  statMastered = computed(() => this._cards().filter(card => card.knownCount != 5).length);
  statInProgress = computed(() => this._cards().filter(card => card.knownCount != 5 && card.knownCount != 0).length);
  statNonStarted = computed(() => this._cards().filter(card => card.knownCount === 0).length);

  private readonly _selectedCategories = signal<string[]>([]);

  selectedCard = computed<FlashcardModel>(() => this._filteredCards()[this.index()]);

  private readonly _tab = signal<TabSelect>('Study Mode');
  tab = this._tab.asReadonly();

  categories = computed<CategoryModel[]>(() => {
    return this._cards().reduce((acc, card) => {
      const index = acc.findIndex((c) => c.category == card.category);
      if (index == -1) {
        acc.push({ category: card.category, total: 1 });
      } else {
        acc[index] = { category: card.category, total: ++acc[index].total };
      }
      return acc.sort((a, b) => a.category.localeCompare(b.category));
    }, [] as CategoryModel[]);
  });

  private readonly http = inject(HttpClient);

  constructor() {
    this.getData();
  }

  setHideMastered(hide: boolean): void {
    this._hideMastered.set(hide);
  }

  setTab(tab: TabSelect): void {
    this._tab.set(tab);
  }

  setSelectedCategories(categories: string[]): void {
    this._selectedCategories.set(categories);
  }

  onShuffleCards(): void {
    this._cards.update((val) => [ ...val.sort(() => Math.random() - 0.5)]);
  }

  nextCard(): void {
    this._index.update((val) => (++val == this.total() ? 0 : val));
  }

  previousCard(): void {
    this._index.update((val) => (val === 0 ? this.total() - 1 : --val));
  }

  resetIndex(): void {
    this._index.set(0);
  }

  onKnowCard(id: string): void {
    const card = this._cards().find((card) => card.id === id)!;
    card.knownCount++;
    this.nextCard();
  }

  onResetProgress(id: string): void {
    const card = this._cards().find((card) => card.id === id)!;
    card.knownCount = 0;
  }

  getData(): void {
    const url = '../../../data/data.json';
    this.http.get<FlashcardModel[]>(url).subscribe((data) => this._cards.set(data));
  }
}
