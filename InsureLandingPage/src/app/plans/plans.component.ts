import { Component } from '@angular/core';
import { Plan } from './models/plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  plans: Plan[] = [
    {
      title: 'Start',
      price: 0,
      users: 1,
      projects: 1
    },
    {
      title: 'Basic',
      price: 19.99,
      users: 5,
      projects: 5
    },
    {
      title: 'Medium',
      price: 49.99,
      users: 100,
      projects: 100
    },
    {
      title: 'Expet',
      price: 199.99,
      users: Infinity,
      projects: Infinity
    }
  ]

  loading = false;

  constructor(private router: Router){}


  onClickOrder(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigateByUrl('home');
    }, 2000);
  }
}
