import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { InputMail } from '@shared/inputs/input-mail/input-mail';

type FormMail = { mail: string };

@Component({
  selector: 'payapi-home-1',
  imports: [InputMail, RouterLink],
  templateUrl: './home-1.html',
  styleUrl: './home-1.scss',
})
export class Home1 {
  formModel = signal<FormMail>({
    mail: '',
  });

  form = form<FormMail>(this.formModel, (schemaPath) => {
    required(schemaPath.mail, { message: 'The field mail is required!' });
  });
}
