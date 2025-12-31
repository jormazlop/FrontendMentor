import { Directive, HostListener, inject, input, output, signal } from '@angular/core';
import { ConfigService } from '@shared/services/config';

@Directive({
  selector: '[type]',
})
export class TypeDirective {
  private readonly sound = inject(ConfigService).soundSelected;

  type = input.required<string[]>();
  typeChange = output<string[]>();

  correctCharacter = input.required<string>();

  incorrectCount = input.required<number>();
  incorrectCountChange = output<number>();

  @HostListener('document:keyup', ['$event']) keyup(event: KeyboardEvent) {
    const exceptions = ['Shift'];

    this.playAudio(event.key);

    if (exceptions.includes(event.key)) {
      return;
    }

    if (event.key == 'Backspace') {
      this.type().pop();
      const res = [...this.type()];
      this.typeChange.emit(res);
      return;
    }

    if (event.key != this.correctCharacter()) {
      this.incorrectCountChange.emit(this.incorrectCount() + 1);
    }

    this.type().push(event.key);
    const res = [...this.type()];
    this.typeChange.emit(res);
  }

  private playAudio(key: string): void {
    if(this.sound() === 'off' || key === 'Shift') return;
    let audio = new Audio();

    switch (key) {
      case 'Backspace':
        audio.src = '../../../audio/return.wav';
        break;
      default:
        if(key != this.correctCharacter()) {
          audio.src = '../../../audio/incorrect.wav';
        } else {
          audio.src = '../../../audio/correct.wav';
        }
    }
    audio.load();
    audio.play();
  }
}
