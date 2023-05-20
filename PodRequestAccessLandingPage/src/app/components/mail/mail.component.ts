import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

  email = '';

  @Output() mailControl = new EventEmitter<boolean>();

  requestAccess(): void {

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    this.mailControl.emit(emailRegex.test(this.email));

  }
}
