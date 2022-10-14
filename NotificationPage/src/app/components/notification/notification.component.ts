import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent {

  @Input() notification: Notification = new Notification();

  @Output() notificationClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  clickNotification(): void {
    this.notificationClicked.emit();
  }

}
