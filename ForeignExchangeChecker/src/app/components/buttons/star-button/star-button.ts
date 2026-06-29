import { Component, input, output } from '@angular/core';
import { IconStarFilled } from '@components/icons/icon-star-filled/icon-star-filled';
import { IconStar } from '@components/icons/icon-star/icon-star';

@Component({
  selector: 'foreign-star-button',
  imports: [IconStar, IconStarFilled],
  templateUrl: './star-button.html',
  styleUrl: './star-button.scss',
})
export class StarButton {
  active = input(false);
  clickStar = output();

  onClickStar(): void {
    this.clickStar.emit()
  }
}
