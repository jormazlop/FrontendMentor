import { Component, computed, inject } from '@angular/core';
import { HomeHeader } from './home-header/home-header';
import { JobService } from '@shared/services/job.service';
import { HomeBody } from './home-body/home-body';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';

@Component({
  selector: 'app-home',
  imports: [HomeHeader, HomeBody, ButtonPrimary],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {
  private readonly service = inject(JobService);

  disabled = computed(() => this.service.filteredJobs().length === this.service.limit());

  onClickLoadMore(): void {
    this.service.loadMore();
  }
}
