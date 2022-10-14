import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsCountPipe } from './pipes/notifications-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationsCountPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
