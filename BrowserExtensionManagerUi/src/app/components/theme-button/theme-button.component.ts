import { Component, computed, inject } from '@angular/core';
import { MoonComponent } from '@icons/moon/moon.component';
import { SunComponent } from '@icons/sun/sun.component';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-theme-button',
  imports: [MoonComponent, SunComponent],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {

  service = inject(ThemeService);

  light = computed(() => this.service.mode() === 'light');

  changeMode(): void {
    this.service.changeMode();
  }
}
