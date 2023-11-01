import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() opened = false;

  @Output() changeOpened = new EventEmitter<boolean>();

  protected onOpen(): void {
    this.opened = !this.opened;
    this.changeOpened.emit(this.opened);
  }

}
