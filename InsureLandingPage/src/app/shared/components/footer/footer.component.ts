import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClickHome(): void {
    this.router.navigateByUrl('home');
  }

  onClickPlans(): void {
    this.router.navigate(['../plans'], {relativeTo: this.route});
  }

  onClickWork(): void {
    this.router.navigate(['../work'], {relativeTo: this.route});
  }
}
