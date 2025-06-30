import { Component, HostListener, input, output } from '@angular/core';
import { MoodOption } from '@shared/models/mood-option';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-small-emoji',
  imports: [LottieComponent],
  templateUrl: './small-emoji.html',
  styleUrl: './small-emoji.scss',
})
export class SmallEmoji {
  animationItem: AnimationItem | undefined;

  option = input.required<MoodOption>();

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.animationItem.autoplay = false;
  }

  @HostListener('mouseenter') onEnter() {
    this.animationItem?.play();
  }

  @HostListener('mouseleave') onLeave() {
    this.animationItem?.stop();
  }
}
