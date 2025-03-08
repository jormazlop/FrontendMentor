import { Component, computed, inject } from '@angular/core';
import { IconCheckComponent } from '@icons/icon-check/icon-check.component';
import { SidebarNavigationComponent } from '@layout/sidebar-navigation/sidebar-navigation.component';
import { ColorThemeService } from '@services/color-theme.service';
import { NgxSonnerToaster } from 'ngx-sonner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from '@layout/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NgxSonnerToaster,
    IconCheckComponent,
    SidebarNavigationComponent,
    MatSidenavModule,
    RouterModule,
    MenuBarComponent
  ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NoteTakingWebApp';

  colorService = inject(ColorThemeService);
  color = computed(() => this.colorService.color());
}
