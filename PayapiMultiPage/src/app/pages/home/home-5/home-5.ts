import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { InputMail } from '@shared/inputs/input-mail/input-mail';

type FormMail = { mail: string };

@Component({
  selector: 'payapi-home-5',
  imports: [InputMail],
  templateUrl: './home-5.html',
  styleUrl: './home-5.scss',
})
export class Home5 {
  formModel = signal<FormMail>({
    mail: '',
  });

  form = form<FormMail>(this.formModel, (schemaPath) => {
    required(schemaPath.mail, { message: 'The field mail is required!' });
  });
}
