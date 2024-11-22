import { Component, inject, signal } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DialogService } from '@ngneat/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavMenuComponent, ButtonComponent, MenuButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menus = ['pricing', 'product', 'about us', 'careers', 'community'];

  open = signal(false);
  private dialog = inject(DialogService);

  onClick(): void {
    this.open.set(true);

    this.dialog
      .open(DialogComponent)
      .afterClosed$.subscribe(() => this.open.set(false));
  }
}
