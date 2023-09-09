export class Blog {
  title: string;
  image: string;
  date: Date;

  constructor() {
    this.title = '';
    this.image = '';
    this.date = new Date();
  }

}
