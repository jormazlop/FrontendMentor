import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-home-not-started',
  imports: [ButtonPrimary],
  templateUrl: './home-not-started.html',
  styleUrl: './home-not-started.scss',
})
export default class HomeNotStarted {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly service = inject(Typing);

  selectedTest = this.service.selectedTest;

  constructor() {
    this.service.initTest();
  }

  onClickTest(): void {
    this.router.navigate(['../started'], { relativeTo: this.route });
  }

  onStartTest(): void {
    this.service.startTest();
    this.router.navigate(['../started'], { relativeTo: this.route });
  }
}
