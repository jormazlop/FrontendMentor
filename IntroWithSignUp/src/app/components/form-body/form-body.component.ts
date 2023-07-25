import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.scss']
})
export class FormBodyComponent {

  bodyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, this.passwordValidator()]),
    password: new FormControl('', Validators.required)
  });

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailRegex.test(control.value) ? null : { invalidEmail: true };
    };
  };

  getControlError(control: string): boolean {
    if (!this.bodyForm.get(control)!.valid
    && (this.bodyForm.get(control)!.dirty || this.bodyForm.get(control)!.touched)) {
      return true;
    } else {
      return false;
    }
  }

  getMessageError(control: string): string {

    let formName = '';

    switch(control) {
      case 'firstName':
        formName = 'First Name';
        break;
      case 'lastName':
        formName = 'Last Name';
        break;
      case 'email':
        formName = 'Email';
        break;
      case 'password':
        formName = 'Password';
        break;
    }

    if (this.bodyForm.get(control)!.errors!['required']) {
      return `${formName} cannot be empty`;
    } else if (this.bodyForm.get(control)!.errors!['invalidEmail']) {
      return `Looks like this is not an ${formName}`;
    }

    return '';
  }

  ngOnInit(): void {
    console.log(this.bodyForm);
  }

  onSubmit(): void {
    console.log(this.bodyForm);
  }
}
