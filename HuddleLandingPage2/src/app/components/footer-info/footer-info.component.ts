import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-info',
  standalone: true,
  imports: [],
  templateUrl: './footer-info.component.html',
  styleUrl: './footer-info.component.scss'
})
export class FooterInfoComponent {

  @Input() type: 'location' | 'telephone' | 'email' = 'location';

}
