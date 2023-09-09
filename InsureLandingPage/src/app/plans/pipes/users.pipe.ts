import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(value: number): string {

    let users = ' Users';

    if (value === Infinity) {
      return 'Unlimited Users';
    }

    return value.toString().concat(users);

  }

}
