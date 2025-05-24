import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-theme-button',
  imports: [],
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
