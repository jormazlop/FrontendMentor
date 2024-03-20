import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentsService } from './services/comments.service';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { AddCommentaireComponent } from './components/add-commentaire/add-commentaire.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentBoxComponent, AddCommentaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'InteractiveCommentsSection';

  private commentsService = inject(CommentsService);
  protected comments$ = this.commentsService.comments$;
  protected user$ = inject(CommentsService).user$;

  private deleteModal = viewChild<TemplateRef<any>>('template');
  private modalService = inject(BsModalService);
  private deleteId = signal(0);

  protected addComent(comment: string): void {
    this.commentsService.addComent(comment, this.user$());
  }

  protected clickPlus(id: number): void {
    this.commentsService.changeScore('plus', id);
  }

  protected clickMinus(id: number): void {
    this.commentsService.changeScore('minus', id);
  }

  protected clickUpdate(content: string, id: number): void {
    this.commentsService.changeComment(content, id);
  }

  protected clickReply(content: string, id: number): void {
    this.commentsService.addReply(content, id);
  }

  protected openDeleteModal(id: number): void {
  this.deleteId.set(id);

    this.modalService.show(this.deleteModal()!, {
      class: 'modal-dialog-centered delete-modal',
      initialState: { data: id}
    });
  }

  protected cancelDelete(): void {
    this.modalService.hide();
  }

  protected confirmDelete(): void {
    this.commentsService.deleteComment(this.deleteId());
    this.modalService.hide();
  }
}
