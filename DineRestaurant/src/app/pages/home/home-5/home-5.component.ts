import { Component, computed, signal } from '@angular/core';
import { BookingPipe } from './booking.pipe';
import { ButtonComponent } from '../../../shared/button/button.component';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

type Booking = {
  type: 'Family' | 'Special' | 'Social';
  description: string;
};

@Component({
  selector: 'app-home-5',
  standalone: true,
  imports: [BookingPipe, ButtonComponent, NgClass, RouterModule],
  templateUrl: './home-5.component.html',
  styleUrl: './home-5.component.scss',
})
export class Home5Component {
  private types = signal<Booking[]>([
    {
      type: 'Family',
      description: `We love catering for entire families.
      So please bring everyone along for a special meal with your loved ones.
      We’ll provide a memorable experience for all.`,
    },
    {
      type: 'Special',
      description: `Whether it’s a romantic dinner or special date you’re celebrating
      with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.`,
    },
    {
      type: 'Social',
      description: `Are you looking to have a larger social event? No problem!
      We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.`,
    },
  ]);

  active = signal(0);

  type = computed(() => this.types()[this.active()]);

  onClickBooking(type: number): void {
    this.active.set(type);
  }
}
