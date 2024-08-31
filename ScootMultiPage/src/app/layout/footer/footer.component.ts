import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '../../icons/logo/logo.component';
import { FacebookComponent } from '../../icons/facebook/facebook.component';
import { InstagramComponent } from '../../icons/instagram/instagram.component';
import { TwitterComponent } from '../../icons/twitter/twitter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    LogoComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
