import { Component, signal } from '@angular/core';
import { InputTextComponent } from '../components/inputs/input-text/input-text.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidateGithub, ValidateMail } from '../components/inputs/validators/validators';
import { ButtonComponent } from '../components/button/button.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-generator',
  imports: [
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    TitleCasePipe
  ],
  templateUrl: './ticket-generator.component.html',
  styleUrl: './ticket-generator.component.scss'
})
export default class TicketGeneratorComponent {

  title = signal<string>(`Your Journey to Coding Conf ${new Date().getFullYear() + 1} Starts Here!`);

  formGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, ValidateMail]),
    github: new FormControl('', [Validators.required, ValidateGithub])
  });

  submit(): void {
    console.log('AAA')
  }

}
