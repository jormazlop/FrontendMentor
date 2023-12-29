import { Component } from '@angular/core';
import { CommunityButtonComponent } from '../../components/community-button/community-button.component';

@Component({
  selector: 'app-ready',
  standalone: true,
  imports: [CommunityButtonComponent],
  templateUrl: './ready.component.html',
  styleUrl: './ready.component.scss'
})
export class ReadyComponent {

}
