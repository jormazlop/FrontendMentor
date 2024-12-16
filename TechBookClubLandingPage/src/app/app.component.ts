import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { JoinTheClubComponent } from './sections/join-the-club/join-the-club.component';
import { ReadTogetherComponent } from './sections/read-together/read-together.component';
import { AverageBookClubComponent } from './sections/average-book-club/average-book-club.component';
import { TechReadingJourneyComponent } from './sections/tech-reading-journey/tech-reading-journey.component';
import { MembershipOptionsComponent } from './sections/membership-options/membership-options.component';
import { TestimoniesComponent } from './sections/testimonies/testimonies.component';
import { FooterComponent } from './sections/footer/footer.component';

const sections = [
  HeaderComponent,
  JoinTheClubComponent,
  ReadTogetherComponent,
  AverageBookClubComponent,
  TechReadingJourneyComponent,
  MembershipOptionsComponent,
  TestimoniesComponent,
  FooterComponent
];

@Component({
  selector: 'app-root',
  imports: [sections],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TechBookClubLandingPage';
}
