import { Injectable, signal } from '@angular/core';
import { PasswordGroup } from '../components/password-body/password-body.component';

type Difficulty = 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG' | '';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {

  private lowerCase = 'abcdefghijklmnopkrstuvwxyz';
  private upperCase = 'ABCDEFGHIJKLMNOPKRSTUVWXYZ';
  private numbers= '123456789';
  private symbols = '!"·$%&/()=?¿^*¨Ç.,<>';

  private length = signal(5);
  readonly length$ = this.length.asReadonly();

  private difficulty = signal<Difficulty>('');
  readonly difficulty$ = this.difficulty.asReadonly();

  private password = signal<string>('');
  readonly password$ = this.password.asReadonly();

  setLength(length: number): void {
    this.length.set(length);
  }

  calculateDifficulty(values: PasswordGroup): void {
    let difficulty = 0;

    if (values.uppercaseControl) {
      difficulty++;
    }

    if (values.lowercaseControl) {
      difficulty++;
    }

    if (values.numbersControl) {
      difficulty++;
    }

    if (values.symbolsControl) {
      difficulty++;
    }

    difficulty += (values.lengthControl ?? 0) / 3;

    if (difficulty < 4) {
      this.difficulty.set('TOO WEAK!');
    } else if (difficulty < 6) {
      this.difficulty.set('WEAK');
    } else if (difficulty < 8) {
      this.difficulty.set('MEDIUM');
    } else {
      this.difficulty.set("STRONG")
    }
  }

  generatePassword(values: PasswordGroup): void {

    let possibleValues = '';
    let password = '';

    if (values.uppercaseControl) {
      possibleValues += this.upperCase;
    }

    if (values.lowercaseControl) {
      possibleValues += this.lowerCase;
    }

    if (values.numbersControl) {
      possibleValues += this.numbers;
    }

    if (values.symbolsControl) {
      possibleValues += this.symbols;
    }

    let counter = 0;
    const length = values.lengthControl ?? 0;

    while (counter < length) {
      password += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
      counter++;
    }

    this.password.set(password)

  }
}
