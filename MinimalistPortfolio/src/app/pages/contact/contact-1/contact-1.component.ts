import { Component } from '@angular/core';
import { IconGithubComponent } from '../../../shared/icon-github/icon-github.component';
import { IconTwitterComponent } from '../../../shared/icon-twitter/icon-twitter.component';
import { IconLinkedinComponent } from '../../../shared/icon-linkedin/icon-linkedin.component';

@Component({
  selector: 'app-contact-1',
  standalone: true,
  imports: [IconGithubComponent, IconTwitterComponent, IconLinkedinComponent],
  templateUrl: './contact-1.component.html',
  styleUrl: './contact-1.component.scss',
})
export class Contact1Component {}
