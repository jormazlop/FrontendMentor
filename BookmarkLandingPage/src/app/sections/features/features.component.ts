import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  linkedSignal,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { ActiveDirective } from '@directives/active.directive';
import { Slide1Component } from '@sections/slides/slide-1/slide-1.component';
import { Slide2Component } from '@sections/slides/slide-2/slide-2.component';
import { Slide3Component } from '@sections/slides/slide-3/slide-3.component';

@Component({
  selector: 'app-features',
  imports: [
    ActiveDirective,
    NgTemplateOutlet,
    Slide1Component,
    Slide2Component,
    Slide3Component,
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  simpleBook = viewChild<TemplateRef<any>>('simpleBook');
  speedySearch = viewChild<TemplateRef<any>>('speedySearch');
  easyShare = viewChild<TemplateRef<any>>('easyShare');

  templates = linkedSignal(() => [
    this.simpleBook(),
    this.speedySearch(),
    this.easyShare(),
  ]);

  features = signal<string[]>([
    'Simple Bookmarking',
    'Speedy Searching',
    'Easy Sharing',
  ]);

  active = signal<number>(0);

  template = linkedSignal(() => this.templates()[this.active()]!);

  protected changeFeature(feature: number): void {
    this.active.set(feature);
  }
}
