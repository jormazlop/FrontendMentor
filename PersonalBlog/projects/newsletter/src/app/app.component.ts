import { Component, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule]
})
export class AppComponent {
  title = 'newsletter';

  mail = new FormControl('', [Validators.email, Validators.required]);
  mailChange = toSignal(this.mail.valueChanges);

  send = linkedSignal(() => {
    this.mailChange();
    return false;
  });

  sendMail(): void {
    if(this.mail.valid) {
      this.mail.reset();
      this.send.set(true);
    }
  }
}
