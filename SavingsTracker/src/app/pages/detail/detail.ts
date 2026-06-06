import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from '@shared/model/model';
import { DetailHeader } from './detail-header/detail-header';
import { DetailBody } from './detail-body/detail-body';
import { DetailDeposit } from './detail-deposit/detail-deposit';
import { DetailHistory } from './detail-history/detail-history';
import { DetailDeleteDialog } from './detail-delete-dialog/detail-delete-dialog';
import { GoalService } from '@shared/services/goal';
import { DetailEditDialog } from './detail-edit-dialog/detail-edit-dialog';

@Component({
  selector: 'app-detail',
  imports: [
    DetailHeader,
    DetailBody,
    DetailDeposit,
    DetailHistory,
    DetailDeleteDialog,
    DetailEditDialog,
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export default class Detail {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly data = toSignal(this.route.data);
  private readonly service = inject(GoalService);
  readonly goal = computed<Goal | undefined>(() => this.data()?.['goal']);
  readonly isDeleteDialogOpen = signal(false);
  readonly isEditDialogOpen = signal(false);

  onBackClick(): void {
    this.router.navigate(['']);
  }

  onEditClick(): void {
    this.isEditDialogOpen.set(true);
  }

  onEditClosed(): void {
    this.isEditDialogOpen.set(false);
  }

  onEditConfirmed(): void {
    this.router.navigate(['']);
  }

  onDeleteClick(): void {
    this.isDeleteDialogOpen.set(true);
  }

  onDeleteConfirmed(): void {
    this.service.deleteGoal(this.goal()!);
    this.isDeleteDialogOpen.set(false);
    this.router.navigate(['']);
  }

  onDeleteCancelled(): void {
    this.isDeleteDialogOpen.set(false);
  }
}
