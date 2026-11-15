import { Component, computed, inject, signal } from '@angular/core';
import { SidepanelHeader } from './sidepanel-header/sidepanel-header';
import { SidepanelTitle } from './sidepanel-title/sidepanel-title';
import { Places } from '@services/places';
import { SidepanelPlace } from './sidepanel-place/sidepanel-place';
import { SidepanelFilter } from './sidepanel-filter/sidepanel-filter';

@Component({
  imports: [SidepanelHeader, SidepanelTitle, SidepanelFilter, SidepanelPlace],
  selector: 'app-sidepanel',
  styleUrl: './sidepanel.scss',
  templateUrl: './sidepanel.html',
})
export class Sidepanel {

  private readonly service = inject(Places);

  rankedPlaces = this.service.rankedPlaces;
  wantPlaces = this.service.wantPlaces;

  activeTab = signal<'ranked' | 'want'>('ranked');

  places = computed(() => {
    const tab = this.activeTab();
    return tab === 'ranked' ? this.rankedPlaces() : this.wantPlaces();
  });

  selectedPlace = this.service.selectedPlace;

  onTabClick(tab: 'ranked' | 'want'): void {
    this.activeTab.set(tab);
  }

  onPlaceClick(placeId: string): void {
    this.service.selectPlace(placeId);
  }
}
