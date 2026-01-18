import {
  afterRenderEffect,
  Component,
  HostBinding,
  input,
  Signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { LogoModel } from '../models/job.model';
import { Blogr } from './blogr/blogr';
import { Coffeeroasters } from './coffeeroasters/coffeeroasters';
import { Creative } from './creative/creative';
import { Crowdfund } from './crowdfund/crowdfund';
import { Maker } from './maker/maker';
import { Mastercraft } from './mastercraft/mastercraft';
import { Officelite } from './officelite/officelite';
import { Pod } from './pod/pod';
import { Pomodoro } from './pomodoro/pomodoro';
import { Scoot } from './scoot/scoot';
import { Typemaster } from './typemaster/typemaster';
import { Vector } from './vector/vector';

@Component({
  selector: 'icon',
  template: '<ng-container #dynamicIcon />',
  styleUrl: './icon.scss',
})
export class Icon {
  logo = input.required<LogoModel>();
  logoBackground = input.required<string>();

  @HostBinding('style.background-color') get backgroundColor() {
    return this.logoBackground();
  }

  private container = viewChild('dynamicIcon', {
    read: ViewContainerRef,
  }) as Signal<ViewContainerRef>;

  private readonly effect = afterRenderEffect(() => {
    this.container().clear();

    switch(this.logo()) {
      case 'blogr':
        this.container().createComponent(Blogr);
        break;
      case 'coffeeroasters':
        this.container().createComponent(Coffeeroasters);
        break;
      case 'creative':
        this.container().createComponent(Creative);
        break;
      case 'crowdfund':
        this.container().createComponent(Crowdfund);
        break;
      case 'maker':
        this.container().createComponent(Maker);
        break;
      case 'mastercraft':
        this.container().createComponent(Mastercraft);
        break;
      case 'officelite':
        this.container().createComponent(Officelite);
        break;
      case 'pod':
        this.container().createComponent(Pod);
        break;
      case 'pomodoro':
        this.container().createComponent(Pomodoro);
        break;
      case 'scoot':
        this.container().createComponent(Scoot);
        break;
      case 'typemaster':
        this.container().createComponent(Typemaster);
        break;
      case 'vector':
        this.container().createComponent(Vector);
        break;
    }

  });
}
