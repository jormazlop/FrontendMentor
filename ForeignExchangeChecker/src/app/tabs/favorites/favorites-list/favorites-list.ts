import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StarButton } from '@components/buttons/star-button/star-button';
import { IconArrowRight } from '@components/icons/icon-arrow-right/icon-arrow-right';
import { Favorite } from '@model/model';
import { Favorites } from '@services/favorites';

@Component({
  selector: 'foreign-favorites-list',
  imports: [StarButton, IconArrowRight, DecimalPipe],
  templateUrl: './favorites-list.html',
  styleUrl: './favorites-list.scss',
})
export class FavoritesList {
  private readonly service = inject(Favorites);
  favorites = this.service.favorites;

  onClickFavorite(favorite: Favorite): void {
    this.service.changeFavorite(favorite);
  }
}
