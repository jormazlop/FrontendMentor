import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: Profile[] = [
    {
      name: 'Tanya Sinclair',
      position: 'UX Engineer',
      testimony: `“ I’ve been interested in coding for a while but never taken the jump, until now.
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so
      excited about the future. ”`,
      image: 'image-tanya.jpg'
    },
    {
      name: 'John Tarkpor',
      position: 'Junior Front-end Developer',
      testimony: `“ If you want to lay the best foundation possible I’d recommend taking this course.
      The depth the instructors go into is incredible. I now feel so confident about
      starting up as a professional developer. ”`,
      image: 'image-john.jpg'
    }
  ];

  private testimony = 0;

  profile$ = new BehaviorSubject<Profile>(this.profiles[0]);

  getProfiles(): Observable<Profile> {
    return this.profile$.asObservable();
  }

  setNextProfile(): void {
    this.testimony++;

    if(this.testimony > this.profiles.length - 1) {
      this.testimony = 0;
    }

    this.profile$.next(this.profiles[this.testimony]);
  }

  setPreviousProfile(): void {
    this.testimony--;

    if(this.testimony < 0) {
      this.testimony = this.profiles.length - 1;
    }

    this.profile$.next(this.profiles[this.testimony]);
  }

}
