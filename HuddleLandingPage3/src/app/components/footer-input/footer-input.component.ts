import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer-input.component.html',
  styleUrl: './footer-input.component.scss'
})
export class FooterInputComponent {
  emailControl = new FormControl('', Validators.compose([Validators.required, Validators.email]))
}
