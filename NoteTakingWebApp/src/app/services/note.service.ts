import { computed, Injectable, signal } from '@angular/core';
import { Note } from '@models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private _notes = signal<Note[]>([new Note(1, 'Test', ['tag1', 'tag2'], new Date(), 'Test')]);
  notes = this._notes.asReadonly();

  private _archived = signal<Note[]>([]);
  archived = this._archived.asReadonly();

  totalNotes = computed(() => [...this._notes(), ...this._archived()]);

  private _opened = signal(true);
  opened = this._opened.asReadonly();

  tags = computed(() => {
    const tags = new Set<string>();

    this._notes().flatMap(note => note.tags).forEach(tag => tags.add(tag));
    this._archived().flatMap(note => note.tags).forEach(tag => tags.add(tag));

    return tags;
  });

  addNote(note: Note): void {
    this._notes.update(val => {

      let existing = val.find(item => item.id === note.id);

      if (existing) {
        existing.body = note.body;
        existing.edited = note.edited;
        existing.tags = note.tags;
        existing.title = note.title;
      } else {
        val.push(note);
      }
      return [...val];
    });
  }

  deleteNote(id: number): void {
    this._notes.update(val => {
      return [...val].filter(note => note.id != id);
    });
    this._archived.update(val => {
      return [...val].filter(note => note.id != id);
    });
  }

  archiveNote(id: number): void {
    this._notes.update(val => {

      const note = val.find(note => note.id == id);

      if(note) {
        this._archived.update(val => {
          val.push(note);
          return [...val];
        })
      }

      return [...val].filter(note => note.id != id);
    });
  }

  restoreNote(id:number): void {
    this._archived.update(val => {

      const note = val.find(note => note.id == id);

      if(note) {
        this._notes.update(val => {
          val.push(note);
          return [...val];
        })
      }

      return [...val].filter(note => note.id != id);
    });
  }

  menu(val?: boolean): void {
    if(val) this._opened.set(val);
    else this._opened.update(val => !val);
  }

}
