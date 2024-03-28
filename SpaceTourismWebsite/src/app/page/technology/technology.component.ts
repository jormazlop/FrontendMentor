import { Component, HostListener, Signal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from '../../models/space';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
  animations: [
    trigger('fadeInCenter', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
        }),
        animate('500ms', style({
          transform: 'scale(1)',
        }))
      ]),
      state('false', style({
        transform: 'scale(0)',
       })),
      state('true', style({
        transform: 'scale(1)',
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
export default class TechnologyComponent {
  private activatedRoute = inject(ActivatedRoute);

  technologies$: Signal<Technology[]> = toSignal(
    this.activatedRoute.data.pipe(map((data) => data['data']))
  );

  technology$ = signal(this.technologies$()[0]);

  stateTechnology = true;
  stateName = true;
  stateDescription = true;
  stateImage = true;

  @HostListener('document:keydown.ArrowUp', ['$event'])
  handleArrowUp(event: KeyboardEvent) {
    let index = this.technologies$().findIndex(t => t === this.technology$());


    if(!this.stateImage) {
      this.clickTechnology(this.technologies$().at(index ? index - 1 : this.technologies$().length - 1)!);
    }

  }

  @HostListener('document:keydown.ArrowDown', ['$event'])
  handleArrowDown(event: KeyboardEvent) {
    let index = this.technologies$().findIndex(t => t === this.technology$());

    if(!this.stateImage) {
      this.clickTechnology(this.technologies$().at(index < this.technologies$().length - 1 ? index +1 : 0)!);
    }

  }

  clickTechnology(technology: Technology): void {
    if(technology !== this.technology$()) {
      this.technology$.set(technology);
      this.stateTechnology = !this.stateTechnology;
      this.stateName = !this.stateName;
      this.stateDescription = !this.stateDescription;
      this.stateImage = !this.stateImage;
    }

  }
}
