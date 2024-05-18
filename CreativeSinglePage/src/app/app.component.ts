import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './blocs/header/header.component';
import { BrandingComponent } from './blocs/branding/branding.component';
import { DesignComponent } from './blocs/design/design.component';
import { WinningComponent } from './blocs/winning/winning.component';
import { SlideComponent } from './blocs/slide/slide.component';
import { FooterComponent } from './blocs/footer/footer.component';

const components = [
  RouterOutlet,
  HeaderComponent,
  BrandingComponent,
  DesignComponent,
  WinningComponent,
  SlideComponent,
  FooterComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CreativeSinglePage';
}
