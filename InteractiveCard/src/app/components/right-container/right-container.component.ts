import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnInit {

  @Output() newCard = new EventEmitter<CardModel>();

  completed = false;

  nameError = false;
  numberError = false;
  monthError = false;
  yearError = false;
  cvcError = false;

  cardForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}')]),
    month: new FormControl(null, [Validators.required, Validators.pattern('^(1[012]|[1-9])$')]),
    year: new FormControl(null, [Validators.required, Validators.pattern('[0-9][0-9]')]),
    cvc: new FormControl(null, [Validators.required, Validators.pattern('[0-9][0-9][0-9]')])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(cardForm: FormGroup) {

    this.nameError = cardForm.controls['name'].status === 'INVALID';
    this.numberError = cardForm.controls['number'].status === 'INVALID';
    this.monthError = cardForm.controls['month'].status === 'INVALID';
    this.yearError = cardForm.controls['year'].status === 'INVALID';
    this.cvcError = cardForm.controls['cvc'].status === 'INVALID';

    if(cardForm.valid) {

      const card = new CardModel(cardForm.get('name')!.value,
                                 cardForm.get('number')!.value,
                                 cardForm.get('month')!.value,
                                 cardForm.get('year')!.value,
                                 cardForm.get('cvc')!.value);

      this.cardForm.reset();

      this.newCard.emit(card);

      this.completed = true;

    }
  }

  onContinue() {
    this.completed = false;
  }
}
