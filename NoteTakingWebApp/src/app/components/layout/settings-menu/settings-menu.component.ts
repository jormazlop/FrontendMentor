import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconArrowComponent } from '@icons/icon-arrow/icon-arrow.component';
import { IconFontComponent } from '@icons/icon-font/icon-font.component';
import { IconLockComponent } from '@icons/icon-lock/icon-lock.component';
import { IconLogoutComponent } from '@icons/icon-logout/icon-logout.component';
import { IconSunComponent } from '@icons/icon-sun/icon-sun.component';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'note-settings-menu',
  imports: [
    IconSunComponent,
    IconArrowComponent,
    IconFontComponent,
    IconLockComponent,
    IconLogoutComponent,
    RouterModule,
  ],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.scss',
})
export class SettingsMenuComponent {

  private service = inject(SettingsService);

  onClickMenu(): void {
    if (window.innerWidth <= 992) {
      this.service.menu();
    }
  }
}
