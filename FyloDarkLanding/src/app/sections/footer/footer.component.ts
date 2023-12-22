import { Component } from '@angular/core';
import { FacebookIconComponent } from '../../components/icons/facebook-icon/facebook-icon.component';
import { InstagramIconComponent } from '../../components/icons/instagram-icon/instagram-icon.component';
import { TwitterIconComponent } from '../../components/icons/twitter-icon/twitter-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, InstagramIconComponent, TwitterIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
