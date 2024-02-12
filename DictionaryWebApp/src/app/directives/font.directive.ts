import { Directive, HostBinding, Input } from '@angular/core';
import { Fonts } from '../services/mode.service';

@Directive({
  selector: '[font]',
  standalone: true,
})
export class FontDirective {
  @HostBinding('style.font-family') @Input() font: Fonts = 'Sans Serif';
}
