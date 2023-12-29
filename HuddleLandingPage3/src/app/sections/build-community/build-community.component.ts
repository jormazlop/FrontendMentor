import { Component } from '@angular/core';
import { CommunityButtonComponent } from '../../components/community-button/community-button.component';

@Component({
  selector: 'app-build-community',
  standalone: true,
  imports: [CommunityButtonComponent],
  templateUrl: './build-community.component.html',
  styleUrl: './build-community.component.scss'
})
export class BuildCommunityComponent {

}
