import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextComponent } from '../../../shared/inputs/input-text/input-text.component';
import { InputTextareaComponent } from '../../../shared/inputs/input-textarea/input-textarea.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-contact-2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextComponent,
    InputTextareaComponent,
    ButtonComponent,
  ],
  templateUrl: './contact-2.component.html',
  styleUrl: './contact-2.component.scss',
})
export class Contact2Component {
  formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }


  onSubmit(): void {
    this.formGroup.reset();
  }
}
