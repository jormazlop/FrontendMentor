import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { FacebookIconComponent } from '../../components/icons/facebook-icon/facebook-icon.component';
import { YoutubeIconComponent } from '../../components/icons/youtube-icon/youtube-icon.component';
import { TwitterIconComponent } from '../../components/icons/twitter-icon/twitter-icon.component';
import { PinterestIconComponent } from '../../components/icons/pinterest-icon/pinterest-icon.component';
import { InstagramIconComponent } from '../../components/icons/instagram-icon/instagram-icon.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    FacebookIconComponent,
    YoutubeIconComponent,
    TwitterIconComponent,
    PinterestIconComponent,
    InstagramIconComponent,
    ButtonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
