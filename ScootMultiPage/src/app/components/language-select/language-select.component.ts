import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './language-select.component.html',
  styleUrl: './language-select.component.scss'
})
export class LanguageSelectComponent {

  translate = inject(TranslateService);

  language = model(this.translate.currentLang);

  private languageEffect = effect(() => {
    this.translate.use(this.language());
  });
}
