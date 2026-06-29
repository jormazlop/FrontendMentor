import { UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal, untracked } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Header } from '@layout/header/header';
import { Livemarkets } from '@layout/livemarkets/livemarkets';
import { RateChange } from '@layout/rate-change/rate-change';
import { NavMenu } from '@model/model';
import { Favorites } from '@services/favorites';
import { LogConversions } from '@services/log-conversions';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Livemarkets,
    RateChange,
    UpperCasePipe,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ForeignExchangeChecker');
  private readonly favorites = inject(Favorites).favorites;
  private readonly logConversions = inject(LogConversions).logConversions;

  navMenu = signal<NavMenu[]>([
    { route: 'history' },
    { route: 'compare' },
    { route: 'favorites', badge: 0 },
    { route: 'log', badge: 0 },
  ]);

  constructor() {
    this.effectUpdateFavorites();
    this.effectUpdateLogs();
  }

  private effectUpdateFavorites(): void {
    effect(() => {
      const favorites = this.favorites();

      untracked(() => {
        this.navMenu.update((menu) =>
          menu.map((item) => (item.route === 'favorites' ? { ...item, badge: favorites.length } : item)),
        );
      });
    });
  }

  private effectUpdateLogs(): void {
    effect(() => {
      const logs = this.logConversions();

      untracked(() => {
        this.navMenu.update((menu) =>
          menu.map((item) => (item.route === 'log' ? { ...item, badge: logs.length } : item)),
        );
      });
    });
  }
}
