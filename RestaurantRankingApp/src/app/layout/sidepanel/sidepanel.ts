import { Component, inject, signal } from '@angular/core';
import { SidepanelHeader } from './sidepanel-header/sidepanel-header';
import { SidepanelTitle } from './sidepanel-title/sidepanel-title';
import { Places } from '@services/places';

@Component({
  imports: [SidepanelHeader, SidepanelTitle],
  selector: 'app-sidepanel',
  styleUrl: './sidepanel.scss',
  templateUrl: './sidepanel.html',
})
export class Sidepanel {

  private readonly service = inject(Places);

  rankedPlaces = this.service.rankedPlaces;
  wantPlaces = this.service.wantPlaces;

  activeTab = signal<'ranked' | 'want'>('ranked');


  onTabClick(tab: 'ranked' | 'want'): void {
    this.activeTab.set(tab);
  }
}
