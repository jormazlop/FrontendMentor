import { Component, HostListener, Signal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from '../../models/space';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({
          filter: 'blur(10px)',
          opacity: 0,
          bottom: '-50px'
        }),
        animate('500ms', style({
          filter: 'blur(0px)',
          opacity: 1,
          bottom: '0px'
        }))
      ]),
      state('false', style({
        filter: 'blur(10px)',
        opacity: 0,
        bottom: '-50px'
       })),
      state('true', style({
        filter: 'blur(0px)',
        opacity: 1,
        bottom: '0px'
      })),
      transition('* => true', [animate(500)]),
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({
          opacity: 0,
          left: '-50px'
        }),
        animate('500ms', style({
          opacity: 1,
          left: '0px'
        }))
      ]),
      state('false', style({
        opacity: 0,
        left: '-50px'
       })),
      state('true', style({
        opacity: 1,
        left: '0px'
      })),
      transition('* => true', [animate(500)]),
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({
          opacity: 0,
          right: '-50px'
        }),
        animate('500ms', style({
          opacity: 1,
          right: '0px'
        }))
      ]),
      state('false', style({
        opacity: 0,
        right: '-50px'
       })),
      state('true', style({
        opacity: 1,
        right: '0px'
      })),
      transition('* => true', [animate(500)]),
    ]),
  ]
})
export default class CrewComponent {

  private activatedRoute = inject(ActivatedRoute);
  crews$: Signal<Crew[]> = toSignal(
    this.activatedRoute.data.pipe(map((data) => data['data']))
  );

  crew$ = signal(this.crews$()[0]);

  stateImage = true;
  stateRole = true;
  stateName = true;
  stateBio = true;

  @HostListener('document:keydown.ArrowLeft', ['$event'])
  handleArrowLeft(event: KeyboardEvent) {
    let index = this.crews$().findIndex(c => c === this.crew$());


    if(!this.stateImage) {
      this.clickCrew(this.crews$().at(index ? index - 1 : this.crews$().length - 1)!);
    }

  }

  @HostListener('document:keydown.ArrowRight', ['$event'])
  handleArrowRight(event: KeyboardEvent) {
    let index = this.crews$().findIndex(c => c === this.crew$());

    if(!this.stateImage) {
      this.clickCrew(this.crews$().at(index < this.crews$().length - 1 ? index +1 : 0)!);
    }

  }

  clickCrew(crew: Crew): void {
    if(this.crew$() !== crew) {
      this.crew$.set(crew);
      this.stateImage = !this.stateImage;
      this.stateRole = !this.stateRole;
      this.stateName = !this.stateName;
      this.stateBio = !this.stateBio;
    }

  }
}
