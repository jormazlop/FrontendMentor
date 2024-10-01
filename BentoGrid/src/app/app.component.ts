import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';
import { SocialMediaFasterComponent } from './components/social-media-faster/social-media-faster.component';
import { ScheduleSocialMediaComponent } from './components/schedule-social-media/schedule-social-media.component';
import { WriteYourContentComponent } from './components/write-your-content/write-your-content.component';
import { ManageMultipleAccountsComponent } from './components/manage-multiple-accounts/manage-multiple-accounts.component';
import { FasterAudiencieGrowthComponent } from './components/faster-audiencie-growth/faster-audiencie-growth.component';
import { MaintainConsistentPostingComponent } from './components/maintain-consistent-posting/maintain-consistent-posting.component';
import { GrowFollowersComponent } from './components/grow-followers/grow-followers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreateScheduleComponent,
    SocialMediaFasterComponent,
    ScheduleSocialMediaComponent,
    WriteYourContentComponent,
    ManageMultipleAccountsComponent,
    FasterAudiencieGrowthComponent,
    MaintainConsistentPostingComponent,
    GrowFollowersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BentoGrid';
}
