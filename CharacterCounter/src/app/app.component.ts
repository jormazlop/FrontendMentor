import { Component, inject } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { ThemeService } from './services/theme.service';
import { CharacterTextareaComponent } from './sections/character-textarea/character-textarea.component';
import { CountersComponent } from './sections/counters/counters.component';
import { LetterDensityComponent } from './sections/letter-density/letter-density.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    CharacterTextareaComponent,
    CountersComponent,
    LetterDensityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CharacterCounter';
  service = inject(ThemeService);
}
