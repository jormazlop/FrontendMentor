import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { ButtonTertiary } from '@shared/buttons/button-tertiary/button-tertiary';
import { InputCheckbox } from '@shared/inputs/input-checkbox/input-checkbox';
import { InputText } from '@shared/inputs/input-text/input-text';
import { InputTextarea } from '@shared/inputs/input-textarea/input-textarea';
import { LogoGoogle } from '@shared/logos/logo-google/logo-google';
import { LogoHewlettPackard } from '@shared/logos/logo-hewlett-packard/logo-hewlett-packard';
import { LogoMicrosoft } from '@shared/logos/logo-microsoft/logo-microsoft';
import { LogoNvidia } from '@shared/logos/logo-nvidia/logo-nvidia';
import { LogoOracle } from '@shared/logos/logo-oracle/logo-oracle';
import { LogoTesla } from '@shared/logos/logo-tesla/logo-tesla';

type FormHelp = {
  name: string;
  mail: string;
  company: string;
  title: string;
  message: string;
  subscription: boolean;
};

@Component({
  selector: 'payapi-contact-1',
  imports: [
    InputText,
    InputTextarea,
    InputCheckbox,
    ButtonTertiary,
    LogoTesla,
    LogoMicrosoft,
    LogoHewlettPackard,
    LogoOracle,
    LogoGoogle,
    LogoNvidia,
  ],
  templateUrl: './contact-1.html',
  styleUrl: './contact-1.scss',
})
export class Contact1 {
  formModel = signal<FormHelp>({
    name: '',
    mail: '',
    company: '',
    title: '',
    message: '',
    subscription: false,
  });

  form = form<FormHelp>(this.formModel, (schemaPath) => {
    required(schemaPath.name, { message: 'This field can’t be empty!' });
    required(schemaPath.mail, { message: 'This field can’t be empty!' });
    required(schemaPath.company, { message: 'This field can’t be empty!' });
    required(schemaPath.title, { message: 'This field can’t be empty!' });
    required(schemaPath.message, { message: 'This field can’t be empty!' });
  });
}
