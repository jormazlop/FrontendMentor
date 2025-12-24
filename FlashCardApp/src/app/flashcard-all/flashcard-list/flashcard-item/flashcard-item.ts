import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonEdit } from '@shared/buttons/button-edit/button-edit';
import { DialogDelete } from '@shared/dialogs/dialog-delete/dialog-delete';
import { DialogEdit } from '@shared/dialogs/dialog-edit/dialog-edit';
import { MasteredTag } from '@shared/mastered-tag/mastered-tag';
import { Tag } from '@shared/tag/tag';
import { FlashcardModel } from 'model/flashcard.model';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'flashcard-item',
  imports: [Tag, MasteredTag, ButtonEdit],
  templateUrl: './flashcard-item.html',
  styleUrl: './flashcard-item.scss',
})
export class FlashcardItem {
  card = input.required<FlashcardModel>();
  private readonly dialog = inject(MatDialog);
  private readonly service = inject(FlashcardService);

  onClickEdit(): void {
    const dialogRef = this.dialog.open(DialogEdit, { data: this.card(), width: '50rem' });

    dialogRef.afterClosed().subscribe((result?: FlashcardModel) => {
      if(result) {
        this.service.onEditCard(result);
      }
    });
  }

  onClickDelete(): void {
    const dialogRef = this.dialog.open(DialogDelete, { width: '50rem' });

    dialogRef.afterClosed().subscribe((result?: boolean) => {
      if (result) {
        this.service.onDeleteCard(this.card().id);
      }
    });
  }
}
