import { Component, inject } from '@angular/core';
import { ButtonOne } from '@shared/components/button-one/button-one';
import { ButtonTwo } from '@shared/components/button-two/button-two';
import { Title } from './title/title';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lose',
  imports: [ButtonOne, ButtonTwo, Title],
  templateUrl: './lose.html',
  styleUrl: './lose.scss'
})
export class Lose {

  private readonly dialog = inject(Dialog);
  private readonly router = inject(Router);

  onPlayAgain(): void {
    this.dialog.closeAll();
  }

  onNewCategory(): void {
    this.dialog.closeAll();
    this.router.navigate(['../pick-a-category']);
  }

  onQuitGame(): void {
    this.dialog.closeAll();
    this.router.navigate(['../../']);
  }
}
