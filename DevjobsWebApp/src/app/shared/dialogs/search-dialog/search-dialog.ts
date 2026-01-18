import { Component, effect, inject, signal } from '@angular/core';
import { InputFilter } from '@shared/inputs/input-filter/input-filter';
import { InputSearch } from '@shared/inputs/input-search/input-search';
import { Location } from '@shared/images/location/location';
import { form } from '@angular/forms/signals';
import { SearchData } from '@shared/models/job.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JobService } from '@shared/services/job.service';

@Component({
  selector: 'app-search-dialog',
  imports: [InputFilter, InputSearch, Location],
  templateUrl: './search-dialog.html',
  styleUrl: './search-dialog.scss',
})
export class SearchDialog {

  data = inject(MAT_DIALOG_DATA);
  private readonly service = inject(JobService);
  private readonly dialogRef = inject(MatDialogRef<SearchDialog>);

  searchFilter = signal<SearchData>({
    company: '',
    location: '',
    full: false,
  });

  form = form<SearchData>(this.searchFilter);

  constructor() {
    this.searchFilter.set(this.data.filter());
  }

  onSearch(): void {
    this.service.filterJobs(this.searchFilter());
    this.dialogRef.close(this.searchFilter());
  }
}
