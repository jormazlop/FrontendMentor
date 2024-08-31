import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LanguageSelectComponent } from '../../components/language-select/language-select.component';
import { LogoComponent } from '../../icons/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ScootService } from '../../services/scoot.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonComponent,
    LanguageSelectComponent,
    LogoComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private service = inject(ScootService);

  menu = this.service.menu;

  onClickMenu(): void {
    this.service.clickMenu();
  }
}
