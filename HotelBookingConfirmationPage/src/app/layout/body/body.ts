import { Component } from '@angular/core';
import { Receipt } from '@components/receipt/receipt';
import { WelcomeCard } from '@components/welcome-card/welcome-card';
import { Sun } from '@icons/sun/sun';
import { ReceiptItemModel, ReceiptModel } from '@models/receipt';
import { addDays } from '@utils/utils';

@Component({
  selector: 'app-body',
  imports: [Receipt, WelcomeCard, Sun],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {

 items: ReceiptItemModel[] = [
  {
    label: "Room",
    description: "La Garrigue",
    quantity: 4,
    unit: "nights",
    amount: 620,
    currency: "€",
  },
  {
    label: "Breakfast",
    quantity: 2,
    unit: "guests",
    amount: 96,
    currency: "€",
  },
  {
    label: "Tourist tax",
    amount: 14.4,
    currency: "€",
  },
];

  receipt: ReceiptModel = {
    numberLabel: 'MS-2026',
    numberValue: '0421-AH',
    dateEntry: new Date(new Date().setHours(15, 0, 0, 0)),
    dateExit: addDays(new Date(new Date().setHours(11, 0, 0, 0)), 4),
    items: this.items
  };
}
