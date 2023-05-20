import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from '../mail/mail.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, MailComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  invalidMail = false;

  loading = false;

  onClickMailControl(mailControl: boolean): void {
    this.loading = true;
    this.invalidMail = !mailControl;

    timer(1).subscribe(() => {
      this.loading = false;
    })
  }
}
