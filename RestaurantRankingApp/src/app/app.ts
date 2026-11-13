import { Component, signal } from '@angular/core';
import { Header } from '@layout/header/header';
import { Map } from '@layout/map/map';
import { Sidepanel } from '@layout/sidepanel/sidepanel';

@Component({
  imports: [Header, Sidepanel, Map],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('RestaurantRankingApp');
}
