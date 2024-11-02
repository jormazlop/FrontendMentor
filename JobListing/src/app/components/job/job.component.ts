import { Component, computed, effect, inject, input } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobService } from '@services/job.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
})
export class JobComponent {

  private service = inject(JobService);
  job = input.required<Job>();

  tags = computed(() => [
    this.job().role,
    this.job().level,
    ...this.job().languages,
    ...this.job().tools,
  ]);

  onClickTag(tag: string): void {
    this.service.addFiltre(tag);
  }
}
