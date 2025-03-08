import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from '@modals/confirm-modal/confirm-modal.component';
import { ModalService } from '@services/modal.service';
import { NoteService } from '@services/note.service';
import { NoteComponent } from 'app/pages/all-notes/note/note.component';
import { NoteComponent as ArchivedNoteComponent } from 'app/pages/archived-notes/note/note.component';
import { map, Observable, tap } from 'rxjs';

export const noteGuard: (
  component: NoteComponent
) => true | Observable<boolean> = (component: NoteComponent | ArchivedNoteComponent) => {
  const modal = inject(ModalService);
  const service = inject(NoteService);
  const router = inject(Router);

  if (component.form.dirty) {
    return modal.open(ConfirmModalComponent).pipe(
      map((val) => !!val.data),
      tap((val) => {
        if (val) service.menu(true);
      })
    );
  } else {
    if(router.getCurrentNavigation()?.extras?.state?.["bypassGuard"]) return true;
    service.menu(true);
    return true;
  }
};
