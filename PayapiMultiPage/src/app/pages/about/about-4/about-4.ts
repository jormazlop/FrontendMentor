import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { InputMail } from '@shared/inputs/input-mail/input-mail';

type FormMail = { mail: string };

@Component({
  selector: 'payapi-about-4',
  imports: [InputMail],
  templateUrl: './about-4.html',
  styleUrl: './about-4.scss',
})
export class About4 {
  formModel = signal<FormMail>({
    mail: '',
  });

  form = form<FormMail>(this.formModel, (schemaPath) => {
    required(schemaPath.mail, { message: 'The field mail is required!' });
  });
}
