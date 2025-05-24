import { Component, input, output } from '@angular/core';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [ThemeButtonComponent]
})
export class HeaderComponent {

  navigation = output<string>();

  active = input('home');

  goTo(route: string): void {
    this.navigation.emit(route);
  }
}
