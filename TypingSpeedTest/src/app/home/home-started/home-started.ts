import { Component, computed, effect, inject, model } from '@angular/core';
import { TypeDirective } from '@shared/directive/type.directive';
import { TextPipe } from '@shared/pipes/text-pipe';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-home-started',
  imports: [TextPipe, TypeDirective],
  templateUrl: './home-started.html',
  styleUrl: './home-started.scss',
})
export default class HomeStarted {

  private readonly service = inject(Typing);

  selectedTest = inject(Typing).selectedTest;

  textTest = computed(() => this.selectedTest()?.text.split('') ?? []);

  textTyped = model<string[]>([]);

  textResult = computed(() => {
    const result = this.textTest().map((character, index) => {

      const match = this.textTyped().at(index);

      if(!match) return null;
      if(match.toLowerCase() === character.toLowerCase()) return true;
      return false;
    });
    return result;
  });

  private readonly effect = effect(() => {
    const accuracy = this.textResult().filter(result => result != false).length / this.textResult().length;
    this.service.setAccuracy(accuracy);
  });
}
