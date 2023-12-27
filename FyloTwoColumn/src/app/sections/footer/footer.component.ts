import { Component } from '@angular/core';
import { FacebookIconComponent } from '../../components/facebook-icon/facebook-icon.component';
import { TwitterIconComponent } from '../../components/twitter-icon/twitter-icon.component';
import { InstagramIconComponent } from '../../components/instagram-icon/instagram-icon.component';
import { FooterLinkComponent } from '../../components/footer-link/footer-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, TwitterIconComponent, InstagramIconComponent, FooterLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks: string[] = ['About Us', 'Contact Us', 'Jobs', 'Terms', 'Press', 'Privacy', 'Blog']
}
