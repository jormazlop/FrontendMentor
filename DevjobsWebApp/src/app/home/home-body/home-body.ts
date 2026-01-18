import { Component, computed, inject } from '@angular/core';
import { JobService } from '@shared/services/job.service';
import { HomeBodyCard } from './home-body-card/home-body-card';

@Component({
  selector: 'app-home-body',
  imports: [HomeBodyCard],
  templateUrl: './home-body.html',
  styleUrl: './home-body.scss',
})
export class HomeBody {
  jobs = inject(JobService).jobs;
  test = computed(() => this.jobs()[0])
}
