import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { BookingCard } from '@components/booking-card/booking-card';
import { Breakfast } from '@icons/breakfast/breakfast';
import { Key } from '@icons/key/key';
import { Wifi } from '@icons/wifi/wifi';

@Component({
  selector: 'app-footer',
  imports: [BookingCard, Key, Wifi, Breakfast],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly clipboard = inject(Clipboard);

  copyPassword(): void {
    this.clipboard.copy('soleil-2026');
  }
}
