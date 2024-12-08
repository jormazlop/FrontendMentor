import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { ShorterLinksComponent } from './sections/shorter-links/shorter-links.component';
import { ShortenInputComponent } from './sections/shorten-input/shorten-input.component';
import { AdvancedStatisticsComponent } from './sections/advanced-statistics/advanced-statistics.component';
import { BoostLinksComponent } from './sections/boost-links/boost-links.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ShorterLinksComponent,
    ShortenInputComponent,
    AdvancedStatisticsComponent,
    BoostLinksComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'UrlShorteningApi';
}
