import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { FacebookComponent } from '../../icons/facebook/facebook.component';
import { TwitterComponent } from '../../icons/twitter/twitter.component';
import { PinterestComponent } from '../../icons/pinterest/pinterest.component';
import { InstagramComponent } from '../../icons/instagram/instagram.component';

@Component({
  selector: 'app-footer',
  imports: [
    LogoComponent,
    FacebookComponent,
    TwitterComponent,
    PinterestComponent,
    InstagramComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
