import { Component, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@layout/page-header/page-header.component';
import { SettingsMenuComponent } from '@layout/settings-menu/settings-menu.component';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'note-settings',
  imports: [
    PageHeaderComponent,
    SettingsMenuComponent,
    MatSidenavModule,
    RouterModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  opened = inject(SettingsService).opened;
}
