import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClickPlans(): void {
    this.router.navigate(['../plans'], {relativeTo: this.route});
  }

  onClickWork(): void {
    this.router.navigate(['../work'], {relativeTo: this.route});
  }

}
