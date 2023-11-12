import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
    ReviewsComponent,
    ProfilesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SocialProofSection';
}
