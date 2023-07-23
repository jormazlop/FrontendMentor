import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  email = '';
  error = false;

  @HostListener('document:keydown.enter',) onKeydownHandler() {
    this.onClickNotification();
  }

  onClickNotification(): void {
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if(emailRegex.test(this.email)) {
      this.error = false;
    } else {
      this.error = false;
      setTimeout(() => {
        this.error = true;
      })
    }
  }

  inputError() {
    return {'background-color': 'red'};
  }
}
