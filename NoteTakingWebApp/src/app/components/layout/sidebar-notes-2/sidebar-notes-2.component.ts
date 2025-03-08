import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { BorderButtonComponent } from '@buttons/border-button/border-button.component';
import { IconArchiveComponent } from '@icons/icon-archive/icon-archive.component';
import { IconDeleteComponent } from '@icons/icon-delete/icon-delete.component';
import { ArchiveModalComponent } from '@modals/archive-modal/archive-modal.component';
import { DeleteModalComponent } from '@modals/delete-modal/delete-modal.component';
import { ModalService } from '@services/modal.service';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-sidebar-notes-2',
  imports: [BorderButtonComponent, IconArchiveComponent, IconDeleteComponent],
  templateUrl: './sidebar-notes-2.component.html',
  styleUrl: './sidebar-notes-2.component.scss',
})
export class SidebarNotes2Component {

  id = input.required<number>();
  private modal = inject(ModalService);
  private service = inject(NoteService);
  private router = inject(Router);

  isArchived = input(false);

  onArchive(): void {
    this.modal.open(ArchiveModalComponent).subscribe(val => {
      if(val.data) {
        this.service.archiveNote(this.id());
        this.router.navigate([ '../']);
      }
    });
  }

  onRestore(): void {
    this.service.restoreNote(this.id());
    this.router.navigate([ '../']);
  }

  onDelete(): void {
    this.modal.open(DeleteModalComponent).subscribe(val => {
      if(val.data) {
        this.service.deleteNote(this.id());
        this.router.navigate([ '../']);
      }
    });
  }
}
