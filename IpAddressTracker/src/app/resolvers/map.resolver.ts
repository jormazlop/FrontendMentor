import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IpaddressService } from '../services/ipaddress.service';
import { Ip } from '../models/ip.model';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, delay, skip } from 'rxjs';

export const mapResolver: ResolveFn<Observable<Ip>> = () => {
  return toObservable(inject(IpaddressService).ip).pipe(skip(1));
};
