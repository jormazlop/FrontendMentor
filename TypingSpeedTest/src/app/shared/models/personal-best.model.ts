export class PersonalBestModel {
  wpm?: number;
  accuracy: number;
  correctCharacters: number;
  incorrectCharacters: number;

  constructor() {
    this.accuracy = 0;
    this.correctCharacters = 0;
    this.incorrectCharacters = 0;
  }
}
