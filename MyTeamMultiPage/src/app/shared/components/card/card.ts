import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Card {

  detail = signal(false);

  changeDetail(): void {
    this.detail.update(val => !val);
  }
}
