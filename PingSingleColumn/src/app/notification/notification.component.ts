import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  email = '';
  emailError = false;

  @HostListener('document:keydown.enter') onKeydownHandler(): void {
    this.onClickNotify();
  }

  onClickNotify(): void {

    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if(emailRegex.test(this.email)) {
      this.emailError = false;
    } else {
      this.emailError = false;
      setTimeout(() => {
        this.emailError = true;
      })
    }
  }
}
