import { Pipe, PipeTransform } from '@angular/core';
import { Notification } from '../models/notification';

@Pipe({
  name: 'notificationsCount'
})
export class NotificationsCountPipe implements PipeTransform {

  transform(notifications: Notification[]): unknown {
    return notifications.filter(notif => notif.actived).length;
  }

}
