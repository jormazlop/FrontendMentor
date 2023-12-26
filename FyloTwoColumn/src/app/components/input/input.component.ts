import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  emailControl = new FormControl('', Validators.compose([Validators.required, Validators.email]));

  notyf = new Notyf();

  submitEmail(): void {
    this.notyf.success('Your email have been successfully saved!');
    this.emailControl.reset();
  }

}
