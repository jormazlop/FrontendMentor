import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  loginForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    mail: ['', [Validators.required, this.validateEmail]],
    password: ['' , Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  validateEmail(control: AbstractControl) {

    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (!regex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  loginSubmit(): void {

    this.snackBar.open('Login invalid!', 'Dismiss');

    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, this.validateEmail]],
      password: ['' , Validators.required]
    });
  }
}
