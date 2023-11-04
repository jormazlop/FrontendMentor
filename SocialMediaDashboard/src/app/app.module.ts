import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { OverviewCardsComponent } from './components/overview-cards/overview-cards.component';
import { UserPipe } from './pipes/user.pipe';
import { FollowersDirective } from './directives/followers.directive';
import { FollowersPipe } from './pipes/followers.pipe';
import { OverviewTodayComponent } from './components/overview-today/overview-today.component';
import { PercentageDirective } from './directives/percentage.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CardComponent, OverviewCardsComponent, UserPipe, FollowersDirective, FollowersPipe, OverviewTodayComponent, PercentageDirective],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
