import { effect, inject, Service, signal, untracked } from '@angular/core';
import { Favorite } from '@model/model';
import { LocalStorage } from './local-storage';

@Service()
export class Favorites {

  private readonly localStorage = inject(LocalStorage);

  private readonly _favorites = signal<Favorite[]>([]);
  readonly favorites = this._favorites.asReadonly();

  constructor() {

    const existingFavorites = this.localStorage.getFavoritesLocalStorage();

    this._favorites.set(existingFavorites ?? []);

    effect(() => {
      const favorites = this._favorites();

      untracked(() => {
        this.localStorage.setFavoritesLocalStorage(favorites);
      });

    });
  }

  changeFavorite(favorite: Favorite): void {
    const currentFavorites = this._favorites();

    const exists = currentFavorites.some(
      (fav) => fav.base === favorite.base && fav.quote === favorite.quote,
    );

    if (exists) {
      this._favorites.set(
        currentFavorites.filter(
          (fav) => !(fav.base === favorite.base && fav.quote === favorite.quote),
        ),
      );
    } else {
      this._favorites.set([...currentFavorites, favorite]);
    }
  }
}
