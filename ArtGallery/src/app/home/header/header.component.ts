import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  onClickLocation(): void {
    this.router.navigate(['../details'], {relativeTo: this.activatedRoute});
  }
}
