import { Component } from '@angular/core';
import { FontButtonComponent } from './font-button/font-button.component';
import { ModeButtonComponent } from './mode-button/mode-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontButtonComponent, ModeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
