import { Component, computed, inject, input } from '@angular/core';
import { StarButton } from '@components/buttons/star-button/star-button';
import { Favorite, Rate } from '@model/model';
import { Favorites } from '@services/favorites';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';

@Component({
  selector: 'foreign-compare-list',
  imports: [StarButton],
  templateUrl: './compare-list.html',
  styleUrl: './compare-list.scss',
})
export class CompareList {
  compareRates = input<Rate[]>([]);
  rateBase = input<number>(0);

  private readonly service = inject(Favorites);
  favorites = this.service.favorites;

  onClickFavorite(rate: Rate): void {
    const favorite: Favorite = {
      base: rate.base,
      quote: rate.quote,
      date: new Date().toISOString().split('T')[0],
      rate: rate.rate,
      changeRate: rate.changeRate,
      base_iso_code: CURRENCY_TO_COUNTRY_MAP[rate.base],
      quote_iso_code: CURRENCY_TO_COUNTRY_MAP[rate.quote],
      name: rate.name,
    };

    this.service.changeFavorite(favorite);
  }

  isFavorite(rate: Rate): boolean {
    return !!this.favorites().find(
      (favorite) => (favorite.base === rate.base) && (favorite.quote === rate.quote),
    );
  }
}
