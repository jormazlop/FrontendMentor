import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { DigitalBankingComponent } from './sections/digital-banking/digital-banking.component';
import { ChooseEasybankComponent } from './sections/choose-easybank/choose-easybank.component';
import { LatestArticlesComponent } from './sections/latest-articles/latest-articles.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    DigitalBankingComponent,
    ChooseEasybankComponent,
    LatestArticlesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EasybankLandingPage';
}
