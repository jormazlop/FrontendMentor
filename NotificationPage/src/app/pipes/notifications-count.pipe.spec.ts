import { Notification } from '../models/notification';
import { NotificationsCountPipe } from './notifications-count.pipe';

describe('NotificationsCountPipe', () => {
  it('create an instance', () => {
    const pipe = new NotificationsCountPipe();
    expect(pipe).toBeTruthy();
  });

  it('0 Notifications', () => {
    const pipe = new NotificationsCountPipe();

    const notifications: Notification[] = [];

    notifications.push(new Notification(
      'Mark Webber',
      'reacted to your recent post <em class="notification-action">My first tournament today!<em>',
      './assets/avatar-mark-webber.webp',
      '1m ago',
      false)
    );
    notifications.push(new Notification(
      'Angela Gray',
      'followed you',
      './assets/avatar-angela-gray.webp',
      '5m ago',
      false)
    );
    expect(pipe.transform(notifications)).toBe(0);
  });

  it('2 Notifications', () => {
    const pipe = new NotificationsCountPipe();

    const notifications: Notification[] = [];

    notifications.push(new Notification(
      'Mark Webber',
      'reacted to your recent post <em class="notification-action">My first tournament today!<em>',
      './assets/avatar-mark-webber.webp',
      '1m ago',
      true)
    );
    notifications.push(new Notification(
      'Angela Gray',
      'followed you',
      './assets/avatar-angela-gray.webp',
      '5m ago',
      true)
    );
    expect(pipe.transform(notifications)).toBe(2);
  });

  it('1 Notifications', () => {
    const pipe = new NotificationsCountPipe();

    const notifications: Notification[] = [];

    notifications.push(new Notification(
      'Mark Webber',
      'reacted to your recent post <em class="notification-action">My first tournament today!<em>',
      './assets/avatar-mark-webber.webp',
      '1m ago',
      false)
    );
    notifications.push(new Notification(
      'Angela Gray',
      'followed you',
      './assets/avatar-angela-gray.webp',
      '5m ago',
      true)
    );
    expect(pipe.transform(notifications)).toBe(1);
  });
});
