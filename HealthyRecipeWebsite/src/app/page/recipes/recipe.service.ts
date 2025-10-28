import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import data from '../../../../public/data/data.json';
import { RecipeT } from '@shared/models/recipe';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  private _recipes: WritableSignal<RecipeT[]> = signal(data);
  recipes = computed(() => this.applyFilter(this._recipes()));

  private prepTime = signal<string | null>(null);
  private cookTime = signal<string | null>(null);
  private search = signal<string>('');

  updateFilter(prepTime: string | null, cookTime: string | null, search: string): void {
    this.prepTime.set(prepTime);
    this.cookTime.set(cookTime);
    this.search.set(search);
  }

  applyFilter(recipes: RecipeT[]): RecipeT[] {
    let res = recipes;

    if (this.prepTime() != null) {
      res = res.filter((recipe) => recipe.prepMinutes <= +this.prepTime()!);
    }

    if (this.cookTime() != null) {
      res = res.filter((recipe) => recipe.cookMinutes <= +this.cookTime()!);
    }

    if (this.search()) {
      res = res.filter((recipe) => recipe.title.includes(this.search()) || recipe.overview.includes(this.search()));
    }

    return res;
  }
}
