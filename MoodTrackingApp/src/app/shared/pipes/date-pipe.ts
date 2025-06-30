import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'custom_date',
})
export class CustomDatePipe extends DatePipe {
  override transform(date: any, format: string | undefined): any {
    const day = date.getDate();

    let ordinal = 'th';

    switch (day) {
      case 1:
      case 21:
      case 31:
        ordinal = 'st';
        break;
      case 2:
      case 22:
        ordinal = 'nd';
        break;
      case 3:
      case 23:
        ordinal = 'rd';
        break;
      default:
        ordinal = 'th';
        break;
    }

    const formatDate = super.transform(date, format);

    return this.replaceLastOccurrenceInString(formatDate!, ',', `${ordinal},`);
  }

  private replaceLastOccurrenceInString(input: string, find: string, replaceWith: string): string {

    const lastIndex = input.lastIndexOf(find);

    if (lastIndex < 0) {
        return input;
    }

    return input.substring(0, lastIndex) + replaceWith + input.substring(lastIndex + find.length);
}
}
