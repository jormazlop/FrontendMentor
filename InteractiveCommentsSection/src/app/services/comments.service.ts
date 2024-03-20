import { Injectable, effect, inject, signal } from '@angular/core';
import data from '../../assets/data/data.json';
import { Comment, User } from '../models/comment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private user: User = { ...data.currentUser };
  private data: Comment[] = [...data.comments];

  private comments = signal<Comment[]>([...this.data]);
  readonly comments$ = this.comments.asReadonly();

  readonly user$ = signal<User>({ ...this.user }).asReadonly();

  private storageService = inject(StorageService);

  constructor() {
    const localData = this.storageService.getStorage();

    if (localData) {
      this.data = localData;
      this.comments.set([...this.data]);
    }

    effect(() => {
      this.storageService.setStorage(this.comments());
    });
  }

  addComent(comment: string, user: User): void {
    const ids = this.comments().flatMap((comment) => {
      if (comment.replies?.length) {
        return comment.replies.map((reply) => reply.id);
      } else {
        return comment.id;
      }
    });

    const newComment: Comment = {
      id: Math.max(...ids) + 1,
      content: comment,
      score: 0,
      replies: [],
      user: user,
      createdAt: new Date().toISOString(),
    };

    this.data.push(newComment);
    this.comments.set([...this.data]);
  }

  changeScore(option: 'minus' | 'plus', id: number): void {
    let comment = {} as Comment;

    this.data.forEach((com) => {
      if (com.id === id) {
        comment = com;
      }

      if (com.replies?.length) {
        com.replies.forEach((rep) => {
          if (rep.id === id) {
            comment = rep;
          }
        });
      }
    });

    switch (option) {
      case 'plus':
        comment.score++;
        break;
      case 'minus':
        if (comment.score) {
          comment.score--;
        }
        break;
    }

    this.comments.set([...this.data]);
  }

  changeComment(content: string, id: number): void {
    let comment = {} as Comment;

    this.data.forEach((com) => {
      if (com.id === id) {
        comment = com;
      }

      if (com.replies?.length) {
        com.replies.forEach((rep) => {
          if (rep.id === id) {
            comment = rep;
          }
        });
      }
    });

    comment.content = content;

    this.comments.set([...this.data]);
  }

  addReply(content: string, id: number): void {
    const ids = this.comments().flatMap((comment) => {
      if (comment.replies?.length) {
        return comment.replies.map((reply) => reply.id);
      } else {
        return comment.id;
      }
    });

    let reply: Comment = {
      id: Math.max(...ids) + 1,
      content: content,
      score: 0,
      replies: [],
      user: this.user$(),
      createdAt: new Date().toISOString(),
    };

    this.data.forEach((com) => {
      if (com.id === id) {
        com.replies?.push(reply);
      }
    });

    this.comments.set([...this.data]);
  }

  deleteComment(id: number) {
    let comment;
    let reply;
    let replies;

    this.data.forEach((com) => {
      if (com.id === id) {
        comment = com;
      }

      if (com.replies?.length) {
        com.replies.forEach((rep) => {
          if (rep.id === id) {
            reply = rep;
            replies = com.replies;
          }
        });
      }
    });

    if (comment) {
      this.data.splice(this.data.indexOf(comment), 1);
    }

    if (reply) {
      replies!.splice(replies!.indexOf(reply), 1);
    }

    this.comments.set([...this.data]);
  }
}
