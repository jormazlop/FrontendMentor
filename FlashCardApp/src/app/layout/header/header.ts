import { Component, inject, model } from '@angular/core';
import { Logo } from '@shared/logo/logo';
import { TabComponent, TabSelect } from '@shared/tab/tab';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'app-header',
  imports: [Logo, TabComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly service = inject(FlashcardService);
  tab = this.service.tab;
  values: TabSelect[] = ['Study Mode', 'All Cards'];

  onChangeTab(tab: TabSelect): void {
    this.service.setTab(tab);
  }
}
