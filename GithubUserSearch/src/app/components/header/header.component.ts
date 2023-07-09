import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  theme = 'theme-light';

  constructor(private themeService: ThemeService) {}


  onChangeTheme(): void {
    this.theme = this.theme === 'theme-light'? 'theme-dark' : 'theme-light';
    this.themeService.setTheme(this.theme);
  }
}
