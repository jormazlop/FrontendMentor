import { Component } from '@angular/core';
import { HeaderButtonComponent } from '../../components/header-button/header-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
