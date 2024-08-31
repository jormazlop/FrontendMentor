import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScootService } from './services/scoot.service';
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SignUpComponent,
    FooterComponent,
    TranslateModule,
    RouterModule,
    ButtonComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ScootMultiPage';

  private translate = inject(TranslateService);

  private service = inject(ScootService);

  menu = this.service.menu;

  constructor() {
    this.translate.addLangs(['en', 'fr', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang()!;
    this.translate.use(browserLang.match(/en|fr|es/) ? browserLang : 'en');
  }

  onClickMenu(): void {
    this.service.clickMenu();
  }
}
