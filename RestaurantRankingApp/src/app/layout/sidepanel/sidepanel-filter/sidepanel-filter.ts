import { Component, computed, inject } from '@angular/core';
import { Places } from '@services/places';

@Component({
  imports: [],
  selector: 'app-sidepanel-filter',
  styleUrl: './sidepanel-filter.scss',
  templateUrl: './sidepanel-filter.html',
})
export class SidepanelFilter {
  private readonly service = inject(Places);
  places = this.service.places;
  filters = computed(() => {
    const filters = new Set<string>();
    filters.add('All');
    this.places().forEach((place) => {
      filters.add(place.cuisine);
    });
    return Array.from(filters);
  });

  selectedFilter = this.service.filter;

  setFilter(filter: string): void {
    this.service.setFilter(filter);
  }
}
