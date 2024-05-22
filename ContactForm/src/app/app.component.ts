import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputTextareaComponent } from './components/input-textarea/input-textarea.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    InputTextComponent,
    InputRadioComponent,
    InputTextareaComponent,
    InputCheckboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ContactForm';

  private toastr = inject(ToastrService);

  formContact = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    query: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    consent: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit(): void {
    this.toastr.success('Thanks for completing the form. We’ll be in touch soon!', 'Message Sent!', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
    });
    this.formContact.reset();
  }
}
