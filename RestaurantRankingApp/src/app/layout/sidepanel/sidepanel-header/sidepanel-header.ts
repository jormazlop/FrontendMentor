import { Component, computed, inject } from '@angular/core';
import { Places } from '@services/places';

@Component({
  imports: [],
  selector: 'app-sidepanel-header',
  styleUrl: './sidepanel-header.scss',
  templateUrl: './sidepanel-header.html',
})
export class SidepanelHeader {
  meta = inject(Places).meta;
  places = inject(Places).places;

  ranked = computed(() => this.places()?.filter((place) => place.rank));
}
