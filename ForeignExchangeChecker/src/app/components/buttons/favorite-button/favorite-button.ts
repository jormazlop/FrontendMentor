import { Component, input, output } from '@angular/core';
import { IconStarFilled } from '@components/icons/icon-star-filled/icon-star-filled';
import { IconStar } from '@components/icons/icon-star/icon-star';

@Component({
  selector: 'foreign-favorite-button',
  imports: [IconStar, IconStarFilled],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.scss',
})
export class FavoriteButton {
  active = input(true);
  clickedFavorite = output();

  onClickedFavorite(): void {
    this.clickedFavorite.emit();
  }
}
