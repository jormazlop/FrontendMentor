import { Component, signal } from '@angular/core';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { IconPlus } from '@shared/icons/icon-plus/icon-plus';
import { Logo } from '@shared/logos/logo/logo';
import { DetailCreateDialog } from '../detail-create-dialog/detail-create-dialog';

@Component({
  selector: 'app-header',
  imports: [Logo, ButtonPrimary, IconPlus, DetailCreateDialog],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly isCreateDialogOpen = signal(false);

  onCreateClick(): void {
    this.isCreateDialogOpen.set(true);
  }

  onCreateClosed(): void {
    this.isCreateDialogOpen.set(false);
  }
}
