import { Component, inject } from '@angular/core';
import { IpaddressService } from '../../services/ipaddress.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  ip = inject(IpaddressService).ip;
}
