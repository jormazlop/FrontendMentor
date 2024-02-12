import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Fonts, ModeService } from '../../../services/mode.service';
import { FontDirective } from '../../../directives/font.directive';
import { FontPipe } from '../../../pipes/font.pipe';

@Component({
  selector: 'app-font-button',
  standalone: true,
  imports: [FontDirective, FontPipe],
  templateUrl: './font-button.component.html',
  styleUrl: './font-button.component.scss'
})
export class FontButtonComponent {

  modeService = inject(ModeService);

  fontOptions: WritableSignal<Fonts[]> = signal(['Sans Serif', 'Serif', 'Monospace']);

  onClickFont(font: Fonts) {
    this.modeService.font = font;
  }
}
