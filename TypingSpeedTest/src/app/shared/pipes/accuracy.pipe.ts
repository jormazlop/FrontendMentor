import { PercentPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accuracy',
})
export class AccuracyPipe extends PercentPipe {

  override transform(value: number | string | null | undefined, digitsInfo?: string, locale?: string): any {
    if(!value) return super.transform(value, '1.0-0', locale);
    else return super.transform(value, digitsInfo, locale);
  }

}
