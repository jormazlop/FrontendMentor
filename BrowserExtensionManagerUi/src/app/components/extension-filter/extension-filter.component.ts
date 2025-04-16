import { Component, computed, inject } from '@angular/core';
import { FilterButtonComponent } from '@components/filter-button/filter-button.component';
import { Filter } from '@models/filter-enum';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-extension-filter',
  imports: [FilterButtonComponent],
  templateUrl: './extension-filter.component.html',
  styleUrl: './extension-filter.component.scss'
})
export class ExtensionFilterComponent {

  filterEnum = Filter;

  private service = inject(DataService);
  filter = this.service.filter;

  isActive = computed(() => (value: Filter) => this.filter() === value);

  setFilter(value: Filter): void {
    this.service.setFilter(value);
  }
}
