import { Pipe, PipeTransform } from '@angular/core';
import { AverageMood, AverageSleep } from '@shared/models/average';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: AverageMood | AverageSleep): string {

    switch(value.message) {
      case 'same':
        return 'Same as the previous 5 check-ins';
      case 'more':
        return 'Increase from the previous 5 check-ins';
      case 'less':
        return 'Decrease from the previous 5 check-ins';
    }
  }

}
