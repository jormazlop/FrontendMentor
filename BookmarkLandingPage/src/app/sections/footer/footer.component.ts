import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { LinkComponent } from '@components/link/link.component';
import { FacebookComponent } from '@icons/facebook/facebook.component';
import { LogoComponent } from '@icons/logo/logo.component';
import { TwitterComponent } from '@icons/twitter/twitter.component';

@Component({
  selector: 'app-footer',
  imports: [
    LogoComponent,
    LinkComponent,
    UpperCasePipe,
    FacebookComponent,
    TwitterComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menuNav = signal<string[]>(['Features', 'Pricing', 'Contact']);
}
