import { Component, inject } from '@angular/core';
import { FacebookComponent } from '@icons/facebook/facebook.component';
import { LogoComponent } from '@icons/logo/logo.component';
import { TwitterComponent } from '@icons/twitter/twitter.component';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-dialog',
  imports: [LogoComponent, FacebookComponent, TwitterComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  private dialog = inject(DialogService);

  onCloseMenu(): void {
    this.dialog.closeAll();
  }
}
