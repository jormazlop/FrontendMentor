import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageTemplateComponent } from './layout/page-template/page-template.component';
import { HeaderComponent } from './sections/header/header.component';
import { ThemeService } from './services/theme.service';
import { InformationComponent } from './sections/information/information.component';
import { FeaturesComponent } from './sections/features/features.component';
import { LinkComponent } from './sections/link/link.component';
import { TestimoniesComponent } from './sections/testimonies/testimonies.component';
import { EarlyAccessComponent } from './sections/early-access/early-access.component';
import { FooterComponent } from './sections/footer/footer.component';

const components = [
  PageTemplateComponent,
  HeaderComponent,
  InformationComponent,
  FeaturesComponent,
  LinkComponent,
  TestimoniesComponent,
  EarlyAccessComponent,
  FooterComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, components],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FyloDarkLanding';

  themeService = inject(ThemeService);
}
