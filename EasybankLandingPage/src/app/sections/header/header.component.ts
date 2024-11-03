import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    LogoComponent,
    MenuButtonComponent,
    DialogComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  open = signal(false);
  private dialog = inject(DialogService);

  onClick(): void {
    this.open.set(true);

    this.dialog
      .open(DialogComponent)
      .afterClosed$.subscribe(() => this.open.set(false));
  }
}
