import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Barcode } from '@icons/barcode/barcode';
import { ReceiptModel } from '@models/receipt';
import { ReceiptItemPipe } from '@pipes/receipt-item-pipe';

@Component({
  selector: 'app-receipt',
  imports: [DatePipe, ReceiptItemPipe, DecimalPipe, Barcode],
  templateUrl: './receipt.html',
  styleUrl: './receipt.scss',
})
export class Receipt {
  receipt = input.required<ReceiptModel>();
}
