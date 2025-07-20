import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonOne } from '@shared/components/button-one/button-one';
import { Logo } from '@shared/components/logo/logo';
import { PlayButton } from '@shared/components/play-button/play-button';

@Component({
  selector: 'app-main',
  imports: [Logo, PlayButton, ButtonOne],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export default class Main {
  private readonly router = inject(Router);

  pickACategory(): void {
    this.router.navigate(['./pick-a-category']);
  }

  howToPlay(): void {
    this.router.navigate(['./how-to-play']);
  }
}
