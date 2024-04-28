import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';
import { NgClass } from '@angular/common';
import { ScreenComponent } from './components/screen/screen.component';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ScreenComponent, BodyComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CalculatorApp';

  theme$ = inject(ThemeService).theme$;

  themeClass = computed(() => 'theme-' + this.theme$())

}
