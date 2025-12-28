export class PersonalBestModel {
  wpm?: number;
  accuracy: number;
  correctCharacters: number;
  wrongCharacters: number;

  constructor() {
    this.accuracy = 0;
    this.correctCharacters = 0;
    this.wrongCharacters = 0;
  }
}
