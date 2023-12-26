import { Component } from '@angular/core';
import { FacebookIconComponent } from '../../components/facebook-icon/facebook-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks: string[] = ['About Us', 'Contact Us', 'Jobs', 'Terms', 'Press', 'Privacy', 'Blog']
}
