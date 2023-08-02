import { UpperCasePipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'upperCustom'
})
export class UpperPipe extends UpperCasePipe {

  override transform(value: any): any {
    return super.transform(value);
  }

}
