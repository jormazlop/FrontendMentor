import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {

  private themeService = inject(ThemeService);

  theme$ = this.themeService.theme$;

  optionClass = computed(() => {
    return 'option-' + this.theme$();
  });

  changeOption(theme: number): void {
    this.themeService.changeTheme(theme);
  }

}
