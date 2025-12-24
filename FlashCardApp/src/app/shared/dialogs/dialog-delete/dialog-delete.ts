import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ButtonBorder } from '@shared/buttons/button-border/button-border';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';

@Component({
  selector: 'app-dialog-delete',
  imports: [ButtonBorder, ButtonPrimary],
  templateUrl: './dialog-delete.html',
  styleUrl: './dialog-delete.scss',
})
export class DialogDelete {
  private dialogRef = inject(MatDialogRef<DialogDelete>);

  onClickCancel(): void {
    this.dialogRef.close(false);
  }

  onClickDelete(): void {
    this.dialogRef.close(true);
  }
}
