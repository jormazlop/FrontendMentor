import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { BringEveryoneTogetherComponent } from './sections/bring-everyone-together/bring-everyone-together.component';
import { WhatDifferentManageComponent } from './sections/what-different-manage/what-different-manage.component';
import { TestimoniesSlideComponent } from './sections/testimonies-slide/testimonies-slide.component';
import { SimplifyYourTeamComponent } from "./sections/simplify-your-team/simplify-your-team.component";
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BringEveryoneTogetherComponent,
    WhatDifferentManageComponent,
    TestimoniesSlideComponent,
    SimplifyYourTeamComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ManageLandingPage';
}
