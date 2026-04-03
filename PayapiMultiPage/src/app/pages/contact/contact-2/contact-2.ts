import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { InputMail } from '@shared/inputs/input-mail/input-mail';

type FormMail = { mail: string };

@Component({
  selector: 'payapi-contact-2',
  imports: [InputMail],
  templateUrl: './contact-2.html',
  styleUrl: './contact-2.scss',
})
export class Contact2 {
  formModel = signal<FormMail>({
    mail: '',
  });

  form = form<FormMail>(this.formModel, (schemaPath) => {
    required(schemaPath.mail, { message: 'The field mail is required!' });
  });
}
