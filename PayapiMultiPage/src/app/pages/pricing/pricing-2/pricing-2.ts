import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { InputMail } from '@shared/inputs/input-mail/input-mail';

type FormMail = { mail: string };

@Component({
  selector: 'payapi-pricing-2',
  imports: [InputMail],
  templateUrl: './pricing-2.html',
  styleUrl: './pricing-2.scss',
})
export class Pricing2 {
  formModel = signal<FormMail>({
    mail: '',
  });

  form = form<FormMail>(this.formModel, (schemaPath) => {
    required(schemaPath.mail, { message: 'The field mail is required!' });
  });
}
