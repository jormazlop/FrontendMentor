import { Component } from '@angular/core';
import { Notification } from './models/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NotificationPage';

  notifications: Notification[] = [];

  ngOnInit() {
    this.notifications.push(new Notification(
      'Mark Webber',
      'reacted to your recent post <em class="notification-action">My first tournament today!<em>',
      './assets/avatar-mark-webber.webp',
      '1m ago',
      true)
    );
    this.notifications.push(new Notification(
      'Angela Gray',
      'followed you',
      './assets/avatar-angela-gray.webp',
      '5m ago',
      true)
    );
    this.notifications.push(new Notification(
      'Jacob Thompson',
      'has joined your group <em class="notification-action">Chess Club<em>',
      './assets/avatar-jacob-thompson.webp',
      '1 day ago',
      true)
    );
    this.notifications.push(new Notification(
      'Rizky Hasanuddin',
      'sent you a private message',
      './assets/avatar-rizky-hasanuddin.webp',
      '5 day ago',
      false,
      `Hello, thanks for setting up the Chess Club. I've been a member for a
      few weeks now and I'm already having lots of fun and improving my
      game`)
    );
    this.notifications.push(new Notification(
      'Kimberly Smith',
      'commented on your picture <img class="chess-image" src="./assets/image-chess.webp"></img>',
      './assets/avatar-kimberly-smith.webp',
      '1 week ago',
      false)
    );
    this.notifications.push(new Notification(
      'Nathan Peterson',
      'reacted to your recent post <em class="notification-action">5 end-game strategies to increase your win rate<em>',
      './assets/avatar-nathan-peterson.webp',
      '2 week ago',
      false)
    );
    this.notifications.push(new Notification(
      'Anna Kim',
      'left the group <em class="notification-action">Chess Club<em>',
      './assets/avatar-anna-kim.webp',
      '2 week ago',
      false)
    );
  }

  onClickNotification(index: number): void {
    this.notifications[index].actived = !this.notifications[index].actived;

    this.notifications = this.notifications.slice();
  }

  onClickAll(): void {
    this.notifications = this.notifications.map( notif => {
      notif.actived = false
      return notif;
    });
  }

}
