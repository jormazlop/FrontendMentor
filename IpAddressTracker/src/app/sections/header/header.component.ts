import { Component, HostListener, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IpaddressService } from '../../services/ipaddress.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ip = model('');

  error = signal(false);

  service = inject(IpaddressService);

  @HostListener('keydown.enter')
  onSearchIp(): void {
    if(this.validateIPaddress()) {
      this.service.onSearchIp(this.ip());
    }
  }

  validateIPaddress(): boolean {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.ip())) {
      this.error.set(false);
      return true;
    }
    this.error.set(true);
    return false
  }

}
