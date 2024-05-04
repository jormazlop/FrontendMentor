import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-presentation',
  standalone: true,
  imports: [],
  templateUrl: './home-presentation.component.html',
  styleUrl: './home-presentation.component.scss'
})
export class HomePresentationComponent {

  private router = inject(Router);

  onClickCreatePlan(): void {
    this.router.navigate(['create-your-plan']);
  }
}
