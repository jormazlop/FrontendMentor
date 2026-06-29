import { Component, inject } from '@angular/core';
import { Favorites as FavService } from '@services/favorites';
import { FavoritesList } from './favorites-list/favorites-list';

@Component({
  selector: 'foreign-favorites',
  imports: [FavoritesList],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export default class Favorites {
  private readonly service = inject(FavService);
  favorites = this.service.favorites;
}
