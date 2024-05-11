import { Component } from '@angular/core';
import { FacebookIconComponent } from '../facebook-icon/facebook-icon.component';
import { PinterestIconComponent } from '../pinterest-icon/pinterest-icon.component';
import { InstagramIconComponent } from '../instagram-icon/instagram-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, PinterestIconComponent, InstagramIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
