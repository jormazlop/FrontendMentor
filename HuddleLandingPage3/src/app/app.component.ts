import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { BuildCommunityComponent } from './sections/build-community/build-community.component';
import { StatisticsComponent } from './sections/statistics/statistics.component';
import { GrowTogetherComponent } from './sections/grow-together/grow-together.component';
import { FlowingConversationsComponent } from './sections/flowing-conversations/flowing-conversations.component';
import { YourUsersComponent } from './sections/your-users/your-users.component';
import { ReadyComponent } from './sections/ready/ready.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    BuildCommunityComponent,
    StatisticsComponent,
    GrowTogetherComponent,
    FlowingConversationsComponent,
    YourUsersComponent,
    ReadyComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HuddleLandingPage3';
}
