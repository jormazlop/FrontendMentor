import { Component } from '@angular/core';
import { TwitterComponent } from '../../icons/twitter/twitter.component';
import { GithubComponent } from '../../icons/github/github.component';
import { LinkedinComponent } from '../../icons/linkedin/linkedin.component';
import { FrontendMentorComponent } from '../../icons/frontend-mentor/frontend-mentor.component';

@Component({
  selector: 'app-footer',
  imports: [TwitterComponent, GithubComponent, LinkedinComponent, FrontendMentorComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
