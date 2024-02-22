import { Component } from '@angular/core';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { InputDocumentComponent } from './input-document/input-document.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuButtonComponent, InputDocumentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
