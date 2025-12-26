export class TestList {
  easy: Test[];
  medium: Test[];
  hard: Test[];

  constructor() {
    this.easy = [];
    this.medium = [];
    this.hard = [];
  }
}

export type Test = {
  id: string;
  text: string;
};
