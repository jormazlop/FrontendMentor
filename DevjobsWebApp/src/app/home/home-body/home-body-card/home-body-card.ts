import { Component, HostListener, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '@shared/icon/icon';
import { JobModel } from '@shared/models/job.model';

@Component({
  selector: 'app-home-body-card',
  imports: [Icon],
  templateUrl: './home-body-card.html',
  styleUrl: './home-body-card.scss',
})
export class HomeBodyCard {

  private readonly router = inject(Router);

  job = input.required<JobModel>();

  @HostListener('keydown.space') space(): void {
    this.router.navigate(['./detail', this.job().id]);
  }

  @HostListener('click') click(): void {
    this.router.navigate(['./detail', this.job().id]);
  }
}
