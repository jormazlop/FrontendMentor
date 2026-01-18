import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { JobModel, SearchData } from '@shared/models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private readonly http = inject(HttpClient);
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly _filter = signal<SearchData>({
    company: '',
    location: '',
    full: false,
  });

  private readonly _totalJobs = signal<JobModel[]>([]);
  readonly totalJobs = this._totalJobs.asReadonly();

  readonly filteredJobs = computed(() => this._totalJobs().filter(job => {
    let resCompany = true;
    if(this._filter().company) {
      resCompany = job.company.toLowerCase().includes(this._filter().company.toLowerCase());
    }
    let resLocation = true;
    if(this._filter().location) {
      resLocation = job.location.toLowerCase().includes(this._filter().location.toLowerCase());
    }
    let resFull = true;
    if(this._filter().full) {
      resFull = job.contract.includes('Full');
    }

    return resCompany && resLocation && resFull;
  }));

  readonly jobs = computed(() => this.filteredJobs().slice(0, this._limit()));

  private readonly _limit = signal(3);
  readonly limit = computed(() =>
    this._limit() < this.filteredJobs().length ? this._limit() : this.filteredJobs().length,
  );

  constructor() {
    this.getData();

    this.breakpointObserver
      .observe('(max-width: 1000px)')
      .subscribe((screen) => {
        if(screen.matches) {
          this._limit.set(4);
        } else {
          this._limit.set(3);
        }
      });
  }

  getData(): void {
    const url = `../../../data/data.json`;
    this.http.get<JobModel[]>(url).subscribe((data) => this._totalJobs.set(data));
  }

  loadMore(): void {
    this._limit.update((val) => val + 3);
  }

  filterJobs(search: SearchData): void {
    this._filter.set(search);
  }
}
