import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  computed,
  inject,
  input,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { Comment, User } from '../../models/comment';
import { LikeCounterComponent } from '../like-counter/like-counter.component';
import { CommentButtonsComponent } from '../comment-buttons/comment-buttons.component';
import { DatePipe } from '../../pipes/date.pipe';
import { FormsModule } from '@angular/forms';
import { ReplyCommentComponent } from '../reply-comment/reply-comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [
    LikeCounterComponent,
    CommentButtonsComponent,
    DatePipe,
    FormsModule,
    ReplyCommentComponent,
    CommonModule,
  ],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.scss',
})
export class CommentBoxComponent {
  @Output() plus = new EventEmitter();
  @Output() minus = new EventEmitter();
  @Output() update = new EventEmitter<string>();
  @Output() addReply = new EventEmitter<string>();
  @Output() delete = new EventEmitter();

  private component = viewChild<ElementRef>('commentBox');
  private replyComponent = viewChild<ElementRef>('replyBox');
  private commentButtons = viewChild<ElementRef>('commentButtons');
  private footerButtons = viewChild<ElementRef>('footerButtons');


  protected edit = signal(false);
  protected reply = signal(false);

  comment = input.required<Comment>();
  user = input.required<User>();

  editComment = model('');

  disabled = computed<boolean>(() => {
    if(this.editComment()) {
      return false;
    } else {
      return true;
    }
  });

  userYou = computed<boolean>(() => {
    return this.comment().user.username === this.user().username;
  });

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent) {
    if (!this.component()?.nativeElement.contains(event.target)) {
      this.edit.set(false);
    }

    if (
      !this.replyComponent()?.nativeElement.contains(event.target) &&
      !this.commentButtons()?.nativeElement.contains(event.target) &&
      !this.footerButtons()?.nativeElement.contains(event.target)
    ) {
      this.reply.set(false);
    }
  }

  protected clickPlus(): void {
    this.plus.emit();
  }

  protected clickMinus(): void {
    this.minus.emit();
  }

  protected setModeEdit(): void {
    this.editComment = model(this.comment().content);
    this.edit.set(true);
  }

  protected updateComment(): void {
    this.update.emit(this.editComment());
    this.edit.set(false);
  }

  protected setModeReply(): void {
    this.reply.set(true);
  }

  protected clickReply(comment: string): void {
    this.addReply.emit(comment);
    this.reply.set(false);
  }

  protected clickDelete(): void {
    this.delete.emit();
  }
}
