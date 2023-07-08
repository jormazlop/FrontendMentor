import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onClickHome(): void {
    this.router.navigate(['../home'], {relativeTo: this.activatedRoute});
  }
}
