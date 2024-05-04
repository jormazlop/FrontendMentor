import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacebookIconComponent } from './facebook-icon/facebook-icon.component';
import { TwitterIconComponent } from './twitter-icon/twitter-icon.component';
import { InstagramIconComponent } from './instagram-icon/instagram-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FacebookIconComponent, TwitterIconComponent, InstagramIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
