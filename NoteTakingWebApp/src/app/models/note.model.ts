export class Note {

  id: number;
  title: string;
  tags: string[];
  edited: Date | null;
  body: string;

  constructor(id: number, title = '', tags: string[] = [], edited: Date | null = null, body = '') {
    this.id = id;
    this.title = title;
    this.tags = tags;
    this.edited = edited;
    this.body = body;
  }
}
