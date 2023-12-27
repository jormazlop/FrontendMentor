import { Component, ViewEncapsulation } from '@angular/core';
import { FacebookIconComponent } from '../../components/facebook-icon/facebook-icon.component';
import { TwitterIconComponent } from '../../components/twitter-icon/twitter-icon.component';
import { InstagramIconComponent } from '../../components/instagram-icon/instagram-icon.component';
import { FooterLinkComponent } from '../../components/footer-link/footer-link.component';
import { NgxPopperjsModule, NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, TwitterIconComponent, InstagramIconComponent, FooterLinkComponent, NgxPopperjsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FooterComponent {

  footerLinks: string[] = ['About Us', 'Contact Us', 'Jobs', 'Terms', 'Press', 'Privacy', 'Blog'];

  trigger = NgxPopperjsTriggers.click;
  placement = NgxPopperjsPlacements.TOP;

  openLink(): void {

  }
}
