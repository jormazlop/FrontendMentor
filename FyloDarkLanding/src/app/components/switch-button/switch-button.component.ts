import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-switch-button',
  standalone: true,
  imports: [],
  templateUrl: './switch-button.component.html',
  styleUrl: './switch-button.component.scss'
})
export class SwitchButtonComponent {

  themeService = inject(ThemeService);

  switchMode(): void {
    this.themeService.changeTheme();
  }
}
