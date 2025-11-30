import { Component, signal } from '@angular/core';
import { email, Field, form, required, schema } from '@angular/forms/signals';
import { Button } from '@shared/components/button/button';
import { TextInput } from '@shared/inputs/text-input/text-input';
import { TextareaInput } from '@shared/inputs/textarea-input/textarea-input';

interface FormData {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  imports: [Field, TextInput, TextareaInput, Button],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  formModel = signal<FormData>({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
  });

  formSchema = schema<FormData>((schemaPath) => {
    required(schemaPath.name, { message: 'Name is required!' });
    required(schemaPath.email, { message: 'Email is required!' });
    email(schemaPath.email, { message: 'Incorrect Format!' });
    required(schemaPath.company, { message: 'Company is required!' });
    required(schemaPath.title, { message: 'Title is required!' });
  });

  form = form(this.formModel, this.formSchema);

  onSubmit(event: Event) {
    event.preventDefault();
    this.formModel.set({
      name: '',
      email: '',
      company: '',
      title: '',
      message: '',
    });
  }
}
