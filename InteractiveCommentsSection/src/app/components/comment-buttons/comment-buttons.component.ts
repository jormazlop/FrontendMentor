import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-comment-buttons',
  standalone: true,
  imports: [],
  templateUrl: './comment-buttons.component.html',
  styleUrl: './comment-buttons.component.scss'
})
export class CommentButtonsComponent {
  user = input.required<boolean>();

  @Output() edit = new EventEmitter();
  @Output() reply = new EventEmitter();
  @Output() delete = new EventEmitter();

  protected clickEdit(): void {
    this.edit.emit();
  }

  protected clickReply(): void {
    this.reply.emit();
  }

  protected clickDelete(): void {
    this.delete.emit();
  }
}
