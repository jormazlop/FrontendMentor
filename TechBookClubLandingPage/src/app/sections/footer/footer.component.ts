import { Component } from '@angular/core';
import { AvatarsComponent } from '@components/avatars/avatars.component';
import { ButtonComponent } from '@components/button/button.component';
import { IconBlueskyComponent } from '@components/icon-bluesky/icon-bluesky.component';
import { IconLinkedinComponent } from '@components/icon-linkedin/icon-linkedin.component';

@Component({
  selector: 'app-footer',
  imports: [
    ButtonComponent,
    AvatarsComponent,
    IconBlueskyComponent,
    IconLinkedinComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
