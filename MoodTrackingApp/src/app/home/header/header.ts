import { Component, inject } from '@angular/core';
import { DialogPosition, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Avatar } from '@shared/avatar/avatar';
import { AngleDown } from '@shared/icons/angle-down/angle-down';
import { Logo } from '@shared/logo/logo';
import { Profile } from 'profile/profile';

@Component({
  selector: 'app-header',
  imports: [Logo, Avatar, AngleDown],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '30%';
    dialogConfig.maxWidth = 'none';
    dialogConfig.position = { top: '10rem', right: '10rem' } as DialogPosition;

    (document.activeElement as HTMLElement).blur();

    this.dialog
      .open(Profile, dialogConfig)
      .afterClosed()
      .subscribe(() => {
      });
  }
}
