import { Component, EventEmitter, Output, computed, input, model } from '@angular/core';
import { User } from '../../models/comment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reply-comment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reply-comment.component.html',
  styleUrl: './reply-comment.component.scss'
})
export class ReplyCommentComponent {

  @Output() send = new EventEmitter<string>();

  user = input.required<User>();
  comment = model<string>('');
  disabled = computed<boolean>(() => {
    if(this.comment()) {
      return false;
    } else {
      return true;
    }
  });

  clickSend(): void {
    this.send.emit(this.comment());
  }
}
