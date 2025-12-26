import { Component, computed, effect, inject, model, OnDestroy } from '@angular/core';
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

  selectedTest = inject(Typing).selectedTest;

  textTest = computed(() => this.selectedTest()?.text.split('') ?? []);

  textTyped = model<string[]>([]);

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
    const accuracy = this.textResult().filter(result => result != false).length / this.textResult().length;
    const wpm = this.textResult().filter(result => result == true).length;
    this.service.setAccuracy(accuracy);
    this.service.setWPM(wpm);
  });

  constructor() {
    this.service.startTest();
  }

  ngOnDestroy(): void {
    this.service.stopTest();
  }
}
