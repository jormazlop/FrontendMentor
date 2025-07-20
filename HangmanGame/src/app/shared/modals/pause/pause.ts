import { Component, inject } from '@angular/core';
import { ButtonOne } from '@shared/components/button-one/button-one';
import { ButtonTwo } from '@shared/components/button-two/button-two';
import { Title } from './title/title';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause',
  imports: [ButtonOne, ButtonTwo, Title],
  templateUrl: './pause.html',
  styleUrl: './pause.scss'
})
export class Pause {

  private readonly dialog = inject(Dialog);
  private readonly router = inject(Router);

  onContinue(): void {
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
