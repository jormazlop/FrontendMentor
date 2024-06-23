import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Ip } from '../models/ip.model';

@Injectable({
  providedIn: 'root'
})
export class IpaddressService {

  http = inject(HttpClient);

  private readonly API_KEY = 'at_rQE9zjoZDzsrMCWRS134Q0xDCzUwm';

  private _ip = signal<Ip>({} as Ip);

  ip = this._ip.asReadonly();

  constructor() {
    this.onSearchIp('');
  }

  onSearchIp(ip: string): void {
    this.http.get<Ip>(`https://geo.ipify.org/api/v2/country,city?apiKey=${this.API_KEY}&ipAddress=${ip}`)
      .subscribe(response => {
        this._ip.set(response);
      });
  }
}
