import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string): string {
    let pipedValue = value == '°C' ? '°' : value;
    return pipedValue;
  }

}
