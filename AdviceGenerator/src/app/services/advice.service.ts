import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advice } from '../models/advice';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  url="https://api.adviceslip.com/advice";

  constructor(private http: HttpClient) { }

  getAdvices():Observable <Advice> {
    return this.http.get<Advice>(this.url);
  }
}
