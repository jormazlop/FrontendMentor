import { Component, computed, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgbDropdownConfig, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from '../../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservations-booking',
  standalone: true,
  imports: [ReactiveFormsModule, NgbModule, ButtonComponent, RouterModule],
  templateUrl: './reservations-booking.component.html',
  styleUrl: './reservations-booking.component.scss',
})
export class ReservationsBookingComponent {
  formGroup!: FormGroup;

  time = signal<'AM' | 'PM'>('AM');

  isAM = computed<boolean>(() => this.time() === 'AM');
  isPM = computed<boolean>(() => this.time() === 'PM');

  people = signal(1);

  dropdownOpen = signal(false);

  private config = inject(NgbDropdownConfig);
  private modalService = inject(NgbModal);

  constructor() {

    this.config.autoClose = 'inside';

    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormGroup({
        day: new FormControl(''),
        month: new FormControl(''),
        year: new FormControl(''),
      }, this.dateValidator()),
      time: new FormGroup({
        hour: new FormControl(''),
        minute: new FormControl(''),
      }, this.timeValidator()),
    });

  }

  private dateValidator(): ValidationErrors {

    return (group: FormGroup): ValidationErrors | null => {

      const day = group.controls['day'].value;
      const month = group.controls['month'].value;
      const year = group.controls['year'].value;

      if (!day || !month || !year) {
        return { required: true }
      }

      const today = new Date();
      const dateToCheck = new Date(`${year}/${month}/${day}`);

      if (isNaN(dateToCheck.getDate()) || dateToCheck < today) {
        console.log(dateToCheck);
        return { invalidDate: true }
      }

      return null;
    };
  }

  private timeValidator(): ValidationErrors {

    return (group: FormGroup): ValidationErrors | null => {

      const hour = group.controls['hour'].value;
      const minute = group.controls['minute'].value;

      if (!hour || !minute) {
        return { required: true }
      }


      if (isNaN(hour) || isNaN(minute) || hour >= 12 || minute >= 60) {
        return { invalidTime: true }
      }

      return null;
    };
  }

  onUpdateTime(time: 'AM' | 'PM'): void {
    this.time.set(time);
    this.dropdownOpen.set(false);
  }

  onClickMenu(): void {
    this.dropdownOpen.update(v => !v);
  }

  onClickMinus(): void {
    this.people.update(v => --v);
  }

  onClickPlus(): void {
    this.people.update(v => ++v);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
