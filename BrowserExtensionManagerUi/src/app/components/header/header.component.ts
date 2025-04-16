import { Component } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';
import { ThemeButtonComponent } from '@components/theme-button/theme-button.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, ThemeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
