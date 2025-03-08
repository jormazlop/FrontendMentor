import { Component, inject } from '@angular/core';
import { ModalService } from '@services/modal.service';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@buttons/secondary-button/secondary-button.component';
import { IconArchiveComponent } from '@icons/icon-archive/icon-archive.component';

@Component({
  selector: 'note-archive-modal',
  templateUrl: './archive-modal.component.html',
    imports: [
      IconArchiveComponent,
      PrimaryButtonComponent,
      SecondaryButtonComponent,
    ],
  styleUrl: './archive-modal.component.scss'
})
export class ArchiveModalComponent {
  private service = inject(ModalService);

  onCancel(): void {
    this.service.close<undefined>();
  }

  onArchive(): void {
    this.service.close<boolean>(true);
  }
}
