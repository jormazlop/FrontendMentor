import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { PageTemplateComponent } from './layout/page-template/page-template.component';
import { HeaderComponent } from './sections/header/header.component';
import { FeatureComponent } from './sections/feature/feature.component';
import { FooterComponent } from './sections/footer/footer.component';

export const components = [
  PageTemplateComponent,
  HeaderComponent,
  FeatureComponent,
  FooterComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, components],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HuddleLandingPage2';
}
