import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@buttons/secondary-button/secondary-button.component';
import { IconArchiveComponent } from '@icons/icon-archive/icon-archive.component';
import { IconArrowComponent } from '@icons/icon-arrow/icon-arrow.component';
import { IconClockComponent } from '@icons/icon-clock/icon-clock.component';
import { IconDeleteComponent } from '@icons/icon-delete/icon-delete.component';
import { IconRefreshComponent } from '@icons/icon-refresh/icon-refresh.component';
import { IconTagComponent } from '@icons/icon-tag/icon-tag.component';
import { SidebarNotes2Component } from '@layout/sidebar-notes-2/sidebar-notes-2.component';
import { DeleteModalComponent } from '@modals/delete-modal/delete-modal.component';
import { Note } from '@models/note.model';
import { ModalService } from '@services/modal.service';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-archived-note',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IconTagComponent,
    IconClockComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    RouterModule,
    DatePipe,
    IconArrowComponent,
    IconDeleteComponent,
    IconRefreshComponent,
    MatSidenavModule,
    SidebarNotes2Component
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {
    private modal = inject(ModalService);
  private service = inject(NoteService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  id = input(0, { transform: (i: string) => +i });
  creation = computed(() => !this.id());
  note = signal(new Note(0));
  form!: FormGroup;

  constructor() {

    effect(() => {
      this.id();
      this.initNote();
    });

  }

  private initNote(): void {
    this.note.update(() => {
      const notes = this.service.totalNotes();

      if (!notes.length) {
        return new Note(1);
      }

      const note = notes.find((note) => note.id === this.id());

      if (note) {
        return note;
      } else {
        const id = Math.max(...notes.map((note) => note.id)) + 1;
        return new Note(id);
      }
    });

    this.form = new FormGroup({
      id: new FormControl(this.note().id, { nonNullable: true }),
      title: new FormControl(this.note().title, { nonNullable: true, validators: [Validators.required] }),
      tags: new FormControl(this.note().tags.toString(), { nonNullable: true }),
      edited: new FormControl(this.note().edited, { nonNullable: true }),
      body: new FormControl(this.note().body, { nonNullable: true }),
    });
  }

  onSaveNote(): void {
    const val = this.form.getRawValue();
    const note = new Note(val.id, val.title, val.tags ? val.tags.split(',') : [] , new Date(), val.body);
    this.service.addNote(note);
    this.router.navigate([ '../../../all-notes/note/', note.id], { relativeTo: this.route, state: { bypassGuard: true } });
    this.initNote();
  }

  onCancel(): void {
    this.router.navigate([ '../../'], { relativeTo: this.route });
  }

  onDelete(): void {
    this.modal.open(DeleteModalComponent).subscribe((val) => {
      if (val.data) {
        this.service.deleteNote(this.id());
        this.router.navigate(['../']);
      }
    });
  }

  onRestore(): void {
    this.service.restoreNote(this.id());
    this.router.navigate([ '../']);
  }
}
