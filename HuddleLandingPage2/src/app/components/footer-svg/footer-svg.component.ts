import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-svg',
  standalone: true,
  imports: [],
  templateUrl: './footer-svg.component.html',
  styleUrl: './footer-svg.component.scss'
})
export class FooterSvgComponent {
  @Input() type: 'facebook' | 'twitter' | 'instagram' = 'facebook';
}
