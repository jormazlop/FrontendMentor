import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@buttons/secondary-button/secondary-button.component';
import { IconCloseComponent } from '@icons/icon-close/icon-close.component';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'note-confirm-modal',
  imports: [
    IconCloseComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
    private service = inject(ModalService);

    onCancel(): void {
      this.service.close<undefined>();
    }

    onArchive(): void {
      this.service.close<boolean>(true);
    }
}
