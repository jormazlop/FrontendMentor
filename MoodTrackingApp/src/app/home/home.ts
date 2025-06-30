import { Component, inject } from '@angular/core';
import { Header } from './header/header';
import { Title } from './title/title';
import { PrimaryButton } from '@shared/buttons/primary-button/primary-button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogMood } from 'log-mood/log-mood';
import { Average } from './average/average';
import { Mood } from './mood/mood';
import { Selection } from '@shared/models/selection';
import { TodayPipe } from '@shared/pipes/today-pipe';
import { MoodService } from '@shared/services/mood';
@Component({
  selector: 'app-home',
  imports: [Header, Title, PrimaryButton, Average, Mood, TodayPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {

  private service = inject(MoodService);

  date = this.service.date;
  mood = this.service.mood;

  private readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '60%';
    dialogConfig.maxWidth = 'none';

    (document.activeElement as HTMLElement).blur();

    this.dialog
      .open(LogMood, dialogConfig)
      .afterClosed()
      .subscribe((sel: Selection) => {
        this.service.setMood(sel);
        this.service.modifyMood(sel, this.date());
    });
  }
}
