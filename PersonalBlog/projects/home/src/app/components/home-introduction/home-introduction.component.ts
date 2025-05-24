import { Component } from '@angular/core';
import { FrontendMentorComponent } from '../../icons/frontend-mentor/frontend-mentor.component';
import { GithubComponent } from '../../icons/github/github.component';
import { LinkedinComponent } from '../../icons/linkedin/linkedin.component';
import { TwitterComponent } from '../../icons/twitter/twitter.component';

@Component({
  selector: 'app-home-introduction',
  imports: [TwitterComponent, GithubComponent, LinkedinComponent, FrontendMentorComponent],
  templateUrl: './home-introduction.component.html',
  styleUrl: './home-introduction.component.scss'
})
export class HomeIntroductionComponent {

}
