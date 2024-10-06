import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { IconGithubComponent } from '../../shared/icon-github/icon-github.component';
import { IconTwitterComponent } from '../../shared/icon-twitter/icon-twitter.component';
import { IconLinkedinComponent } from '../../shared/icon-linkedin/icon-linkedin.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    RouterModule,
    IconGithubComponent,
    IconTwitterComponent,
    IconLinkedinComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
