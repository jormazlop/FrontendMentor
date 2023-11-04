import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: string, type: string): unknown {

    let pipedValue;

    switch(type) {
      case 'facebook':
      case 'twitter':
      case 'instagram':
        pipedValue = '@' + value;
        break;
      default:
        pipedValue = value;
    }


    return pipedValue;
  }

}
