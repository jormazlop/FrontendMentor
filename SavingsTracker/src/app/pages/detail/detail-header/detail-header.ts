import { Component, output } from '@angular/core';
import { ButtonTertiary } from '@shared/buttons/button-tertiary/button-tertiary';
import { IconChevronLeft } from '@shared/icons/icon-chevron-left/icon-chevron-left';

@Component({
  selector: 'app-detail-header',
  imports: [ButtonTertiary, IconChevronLeft],
  templateUrl: './detail-header.html',
  styleUrl: './detail-header.scss',
})
export class DetailHeader {

  back = output();
  edit = output();
  delete = output();

  onBackClick() {
    this.back.emit();
  }

  onEditClick() {
    this.edit.emit();
  }

  onDeleteClick() {
    this.delete.emit();
  }
}
