import { Pipe, PipeTransform } from '@angular/core';
import { ReceiptItemModel } from '@models/receipt';

@Pipe({
  name: 'receiptItem',
})
export class ReceiptItemPipe implements PipeTransform {
  transform(item: ReceiptItemModel): string {
    return [
      item.label,
      item.description ? `· ${item.description}` : null,
      item.quantity && item.unit ? `× ${item.quantity} ${item.unit}` : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
