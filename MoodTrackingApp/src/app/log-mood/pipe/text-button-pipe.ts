import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textButton'
})
export class TextButtonPipe implements PipeTransform {

  transform(step: number): string {
    return step < 4 ? 'Continue' : 'Submit';
  }

}
