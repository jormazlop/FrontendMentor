import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@buttons/secondary-button/secondary-button.component';
import { IconDeleteComponent } from '@icons/icon-delete/icon-delete.component';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'note-delete-modal',
  imports: [
    IconDeleteComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss',
})
export class DeleteModalComponent {

  private service = inject(ModalService);

  onCancel(): void {
    this.service.close<undefined>();
  }

  onDelete(): void {
    this.service.close<boolean>(true);
  }
}
