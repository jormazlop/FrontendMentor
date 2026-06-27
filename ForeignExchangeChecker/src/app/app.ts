import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Header } from '@layout/header/header';
import { Livemarkets } from '@layout/livemarkets/livemarkets';
import { RateChange } from '@layout/rate-change/rate-change';
import { NavMenu } from '@model/model';

@Component({
  selector: 'app-root',
  imports: [Header, Livemarkets, RateChange, UpperCasePipe, RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ForeignExchangeChecker');

  navMenu = signal<NavMenu[]>([
    { route: 'history' },
    { route: 'compare' },
    { route: 'favorites' },
    { route: 'log' },
  ]);
}
