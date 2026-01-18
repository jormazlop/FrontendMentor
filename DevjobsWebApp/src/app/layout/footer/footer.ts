import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { JobModel } from '@shared/models/job.model';
import { JobService } from '@shared/services/job.service';

@Component({
  selector: 'app-footer',
  imports: [ButtonPrimary],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly router = inject(Router);
  private readonly service = inject(JobService);

  job: JobModel | undefined;

  constructor() {
    const route = this.router.routerState.root.firstChild;
    const id = +route?.snapshot.params['id'];

    this.job = this.service.totalJobs().find(job => job.id === id);
  }
}
