export type ReceiptModel = {
  numberLabel: string;
  numberValue: string;
  dateEntry: Date;
  dateExit: Date;
  items: ReceiptItemModel[];
}

export type ReceiptItemModel = {
  label: string;
  description?: string;
  quantity?: number;
  unit?: string;
  amount: number;
  currency?: string;
};
