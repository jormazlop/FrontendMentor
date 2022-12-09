import { Injectable } from '@angular/core';
import { Pledge } from '../models/pledge.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PledgeService {

  private rewards: BehaviorSubject<Pledge[]> = new BehaviorSubject([
    {
      title: 'Bamboo Stand',
      quantity: 25,
      description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
      you’ll be added to a special Backer member list.`,
      left: 101
    },
    {
      title: 'Black Edition Stand',
      quantity: 75,
      description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
      member list. Shipping is included.`,
      left: 64
    },
    {
      title: 'Mahogany Special Edition',
      quantity: 200,
      description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
      to our Backer member list. Shipping is included.`,
      left: 0
    }
  ]);

  constructor() { }

  getPledges(): Observable<Pledge[]> {
    return this.rewards;
  }

  setPledges(pledges: Pledge[]): void {
    this.rewards.next(pledges);
  }
}
