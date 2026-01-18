import { Component, HostListener, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Location } from '@shared/images/location/location';
import { Search } from '@shared/images/search/search';
import { InputFilter } from '@shared/inputs/input-filter/input-filter';
import { InputSearchResponsive } from '@shared/inputs/input-search-responsive/input-search-responsive';
import { InputSearch } from '@shared/inputs/input-search/input-search';
import { SearchData } from '@shared/models/job.model';
import { JobService } from '@shared/services/job.service';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialog } from '@shared/dialogs/search-dialog/search-dialog';

@Component({
  selector: 'app-home-header',
  imports: [Search, Location, InputFilter, InputSearch, InputSearchResponsive],
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
})
export class HomeHeader {
  private readonly service = inject(JobService);
  private readonly dialog = inject(MatDialog);

  searchFilter = signal<SearchData>({
    company: '',
    location: '',
    full: false,
  });

  form = form<SearchData>(this.searchFilter);

  @HostListener('document:keydown.enter') onEnter(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.service.filterJobs(this.searchFilter());
  }

  onFilter(): void {
    const ref = this.dialog.open(SearchDialog, { width: '95vw', data: { filter: this.searchFilter } });
    ref.afterClosed().subscribe(val => {
      if(val) {
        this.searchFilter.set(val);
      }
    })
  }
}
