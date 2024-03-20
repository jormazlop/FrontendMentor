import { Component, EventEmitter, Output, computed, input, model } from '@angular/core';
import { User } from '../../models/comment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-commentaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-commentaire.component.html',
  styleUrl: './add-commentaire.component.scss',
})
export class AddCommentaireComponent {
  user = input.required<User>();
  comment = model<string>('');
  disabled = computed<boolean>(() => {
    if(this.comment()) {
      return false;
    } else {
      return true;
    }
  });

  @Output() send = new EventEmitter<string>();

  onClickSend(): void {
    this.send.emit(this.comment());
    this.comment.set('');
  }
}
