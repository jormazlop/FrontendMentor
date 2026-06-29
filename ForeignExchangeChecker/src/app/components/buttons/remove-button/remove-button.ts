import { Component, output } from '@angular/core';
import { IconDelete } from '@components/icons/icon-delete/icon-delete';

@Component({
  selector: 'foreign-remove-button',
  imports: [IconDelete],
  templateUrl: './remove-button.html',
  styleUrl: './remove-button.scss',
})
export class RemoveButton {
  clickRemove = output();

  onClickRemove(): void {
    this.clickRemove.emit();
  }
}
