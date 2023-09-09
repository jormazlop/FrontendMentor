import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {

    let price = '';

    switch (value) {
      case 0:
        price = 'Free';
        break;
      default:
        price = '$' + value.toString();
        break;
    }
    return price;
  }

}
