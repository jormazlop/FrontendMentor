import { Component, computed, effect, inject, model, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TypeDirective } from '@shared/directives/type.directive';
import { TextPipe } from '@shared/pipes/text-pipe';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-home-started',
  imports: [TextPipe, TypeDirective],
  templateUrl: './home-started.html',
  styleUrl: './home-started.scss',
})
export default class HomeStarted implements OnDestroy {

  private readonly service = inject(Typing);
  private readonly router = inject(Router);

  selectedTest = inject(Typing).selectedTest;

  textTest = computed(() => this.selectedTest()?.text.split('') ?? []);

  textTyped = model<string[]>([]);

  correctCharacter = computed(() => this.textTest()[this.textTyped().length]);

  incorrectCount = model<number>(0);

  textResult = computed(() => {
    const result = this.textTest().map((character, index) => {
      const match = this.textTyped().at(index);
      if(!match) return null;
      if(match === character) return true;
      return false;
    });
    return result;
  });

  private readonly effect = effect(() => {
    let accuracy = (this.textResult().length - this.incorrectCount()) / this.textResult().length;
    accuracy = accuracy > 0 ? accuracy : 0;
    const wpm = this.textResult().filter(result => result == true).length;
    this.service.setAccuracy(accuracy);
    this.service.setWPM(wpm);
    this.service.setIncorrectCount(this.incorrectCount());
    this.service.setCorrectCount(this.textResult().filter(result => result === true).length)

    if (this.textResult().filter(character => character !== null).length) {
      this.service.startTest();
    }

    if(this.textResult().filter(character => character !== null).length === this.textTest().length && this.textTest().length) {
      this.router.navigate(['../results']);
    }
  });

  ngOnDestroy(): void {
    this.service.stopTest();
  }
}
