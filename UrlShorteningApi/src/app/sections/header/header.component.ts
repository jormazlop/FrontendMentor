import { Component, inject } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonMenuComponent } from '../../components/button-menu/button-menu.component';
import { DialogService } from '@ngneat/dialog';
import { HeaderDialogComponent } from './header-dialog/header-dialog.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent,
    HeaderMenuComponent,
    ButtonComponent,
    ButtonMenuComponent,
    HeaderDialogComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  elements = ['Features', 'Pricing', 'Resources'];

  private dialog = inject(DialogService);

  onClick(): void {
    this.dialog.open(HeaderDialogComponent);
  }
}
