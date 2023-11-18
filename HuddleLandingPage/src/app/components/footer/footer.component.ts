import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookIconComponent } from '../icons/facebook-icon/facebook-icon.component';
import { TwitterIconComponent } from '../icons/twitter-icon/twitter-icon.component';
import { InstagramIconComponent } from '../icons/instagram-icon/instagram-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FacebookIconComponent, TwitterIconComponent, InstagramIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
