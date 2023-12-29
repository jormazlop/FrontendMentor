import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-community-button',
  standalone: true,
  imports: [],
  templateUrl: './community-button.component.html',
  styleUrl: './community-button.component.scss'
})
export class CommunityButtonComponent {

  @Output() getStarted = new EventEmitter<null>;

  onClickButton(): void {
    this.getStarted.emit();
  }
}
