import {
  Component,
  HostListener,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { Destination } from '../../models/space';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  animations: [
    trigger('fadeInOpacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
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
  ],
})
export default class DestinationComponent {
  private activatedRoute = inject(ActivatedRoute);
  destinations$: Signal<Destination[]> = toSignal(
    this.activatedRoute.data.pipe(map((data) => data['data']))
  );

  destination$ = signal(this.destinations$()[0]);

  stateImage = true;
  stateTitle = true;
  stateDescription = true;
  stateFooter = true;

  @HostListener('document:keydown.ArrowLeft', ['$event'])
  handleArrowLeft(event: KeyboardEvent) {
    let index = this.destinations$().findIndex(d => d === this.destination$());


    if(!this.stateImage) {
      this.clickDestination(this.destinations$().at(index ? index - 1 : this.destinations$().length - 1)!);
    }

  }

  @HostListener('document:keydown.ArrowRight', ['$event'])
  handleArrowRight(event: KeyboardEvent) {
    let index = this.destinations$().findIndex(d => d === this.destination$());

    if(!this.stateImage) {
      this.clickDestination(this.destinations$().at(index < this.destinations$().length - 1 ? index +1 : 0)!);
    }

  }


  clickDestination(destination: Destination): void {
    if(this.destination$() !== destination) {
      this.destination$.set(destination);
      this.stateImage = !this.stateImage;
      this.stateTitle = !this.stateTitle;
      this.stateDescription = !this.stateDescription;
      this.stateFooter = !this.stateFooter;
    }
  }
}
