import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconArchiveComponent } from '@icons/icon-archive/icon-archive.component';
import { IconHomeComponent } from '@icons/icon-home/icon-home.component';
import { IconSearchComponent } from '@icons/icon-search/icon-search.component';
import { IconSettingsComponent } from '@icons/icon-settings/icon-settings.component';
import { IconTagComponent } from '@icons/icon-tag/icon-tag.component';

@Component({
  selector: 'note-menu-bar',
  imports: [
    IconHomeComponent,
    IconSearchComponent,
    IconArchiveComponent,
    IconTagComponent,
    IconSettingsComponent,
    RouterModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {}
