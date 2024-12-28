import { Component, inject, signal } from '@angular/core';
import { InputTextComponent } from '../components/inputs/input-text/input-text.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidateFile, ValidateGithub, ValidateMail } from '../components/inputs/validators/validators';
import { ButtonComponent } from '../components/button/button.component';
import { TitleCasePipe } from '@angular/common';
import { InputImageComponent } from '../components/inputs/input-image/input-image.component';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-ticket-generator',
  imports: [
    ReactiveFormsModule,
    InputTextComponent,
    InputImageComponent,
    ButtonComponent,
    TitleCasePipe
  ],
  templateUrl: './ticket-generator.component.html',
  styleUrl: './ticket-generator.component.scss'
})
export default class TicketGeneratorComponent {

  router = inject(Router);

  service = inject(TicketService);

  title = signal<string>(`Your Journey to Coding Conf ${new Date().getFullYear() + 1} Starts Here!`);

  formGroup = new FormGroup({
    avatar: new FormControl({} as File, [Validators.required, ValidateFile]),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, ValidateMail]),
    github: new FormControl('', [Validators.required, ValidateGithub])
  });

  submit(): void {

    this.service.generateTicket(this.formGroup.value)
    this.router.navigate(['ticket-generated']);
  }

}
