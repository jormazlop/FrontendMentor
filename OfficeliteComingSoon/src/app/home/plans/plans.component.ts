import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  constructor(private router: Router) {}

  onClickButton(): void {
    this.router.navigate(['/', 'signup']);
  }
}
