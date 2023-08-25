import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  loading = false;
  timerSubscription = new Subscription();
  form: FormGroup = new FormGroup({});

  packs = [
    {value: 'basic', viewValue: 'Basic Pack', viewPrice: 'Free'},
    {value: 'pro', viewValue: 'Pro Pack', viewPrice: '$9.99'},
    {value: 'ultimate', viewValue: 'Ultimate Pack', viewPrice: '$19.99'},
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = this.initialiseFormGroup();
  }

  initialiseFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, this.validateMail]),
      pack: new FormControl(this.packs[0].value),
      phone: new FormControl('', [Validators.required, this.validatePhone]),
      company: new FormControl('', [Validators.required]),
    });
  }

  validateMail(control: AbstractControl) {

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!control.value.match(mailFormat)) {
      return { invalidMail: true };
    }
    return null;
  }

  validatePhone(control: AbstractControl) {

    const mailFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!control.value.match(mailFormat)) {
      return { invalidPhone: true };
    }
    return null;
  }

  onSubmit(): void {

    this.loading = true;

    this.timerSubscription = timer(2000).subscribe(() => {
      this.form = this.initialiseFormGroup();
      this.loading = false;
      this.snackBar.open('Saved!', 'Dismiss');
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

}
