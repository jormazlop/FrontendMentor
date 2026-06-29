import { Service, signal } from '@angular/core';
import { Favorite } from '@model/model';

@Service()
export class Favorites {
  private readonly _favorites = signal<Favorite[]>([]);
  readonly favorites = this._favorites.asReadonly();

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
