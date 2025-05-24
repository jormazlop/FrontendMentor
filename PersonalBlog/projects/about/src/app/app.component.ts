import { Component } from '@angular/core';
import { TwitterComponent } from './icons/twitter/twitter.component';
import { GithubComponent } from './icons/github/github.component';
import { LinkedinComponent } from './icons/linkedin/linkedin.component';
import { FrontendMentorComponent } from './icons/frontend-mentor/frontend-mentor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TwitterComponent, GithubComponent, LinkedinComponent, FrontendMentorComponent]
})
export class AppComponent {
  title = 'about';
}
