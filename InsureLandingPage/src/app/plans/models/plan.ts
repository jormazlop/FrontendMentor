export class Plan {
  title: string;
  price: number;
  users: number;
  projects: number;

  constructor() {
    this.title = '';
    this.price = 0;
    this.users = 0;
    this.projects = 0;
  }
}
