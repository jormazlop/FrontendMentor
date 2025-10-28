import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cook-smarter',
  imports: [Button],
  templateUrl: './cook-smarter.html',
  styleUrl: './cook-smarter.scss'
})
export class CookSmarter {

  private router = inject(Router);

  onClickBrowseRecipes(): void {
    this.router.navigate(['./recipes']);
  }
}
