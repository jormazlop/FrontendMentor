import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Step } from '@services/step';

@Component({
  selector: 'app-step-resume',
  imports: [UpperCasePipe],
  templateUrl: './step-resume.html',
  styleUrl: './step-resume.scss'
})
export class StepResume {
  steps = inject(Step).steps;

  route = inject(Router);

  active = signal(1);

  constructor() {
    this.route.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.active.set(+val.url.at(-1)!);
        if(val.url.includes('final-step')) this.active.set(4);
      }
    })
  }

}
