import { Component, computed, effect, inject, input } from '@angular/core';
import { DetailHeader } from './detail-header/detail-header';
import { JobService } from '@shared/services/job.service';
import { JobModel } from '@shared/models/job.model';
import { DetailBody } from './detail-body/detail-body';

@Component({
  selector: 'app-detail',
  imports: [DetailHeader, DetailBody],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export default class Detail {
  readonly id = input.required<number, string>({ transform: this.stringToNumber });

  private readonly service = inject(JobService);

  readonly job = computed<JobModel | undefined>(() => this.service.totalJobs().find(job => job.id === this.id()));

  private stringToNumber(value: string): number {
    return +value;
  }
}
