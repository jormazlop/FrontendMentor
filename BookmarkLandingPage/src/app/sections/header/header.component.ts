import { Component, inject, signal } from '@angular/core';
import { LogoComponent } from '@icons/logo/logo.component';
import { LinkComponent } from '@components/link/link.component';
import { UpperCasePipe } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { MenuButtonComponent } from '@components/menu-button/menu-button.component';
import { DialogService } from '@ngneat/dialog';
import { DialogComponent } from '@components/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    LogoComponent,
    LinkComponent,
    UpperCasePipe,
    ButtonComponent,
    MenuButtonComponent,
  ],
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuNav = signal<string[]>(['Features', 'Pricing', 'Contact']);
  open = signal(false);

  private dialog = inject(DialogService);

  onClickMenu(): void {
    this.open.update(val => !val);
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed$.subscribe(() => this.open.update(val => !val));
  }
}
