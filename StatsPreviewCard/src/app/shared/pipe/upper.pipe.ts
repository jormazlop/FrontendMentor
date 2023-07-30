import { Pipe } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'upper'
})
export class UpperPipe extends UpperCasePipe {

  override transform(value: any): any {
    return super.transform(value);
  }

}
