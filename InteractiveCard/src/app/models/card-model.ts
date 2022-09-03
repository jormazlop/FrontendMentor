export class CardModel {
  name: String;
  number: String;
  month: String;
  year: String;
  cvc: String;

  constructor(name: String, number: String, month: String, year: String, cvc: String) {
    this.name = name;
    this.number = number;
    this.month = month;
    this.year = year;
    this.cvc = cvc;
  }
}
