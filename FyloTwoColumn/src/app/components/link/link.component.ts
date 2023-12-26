import { Component } from '@angular/core';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  notyf = new Notyf();

  linkError(): void {
    this.notyf.error('This section is not available yet!');
  }
}
