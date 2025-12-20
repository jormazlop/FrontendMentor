import { Component, input, output } from '@angular/core';
import {Tab, Tabs, TabList} from '@angular/aria/tabs';

export type TabSelect = 'Study Mode'| 'All Cards';

@Component({
  selector: 'tab',
  imports: [TabList, Tab, Tabs],
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
})
export class TabComponent {
  values = input.required<TabSelect[]>();

  tab = input<TabSelect>();
  tabChange = output<TabSelect>();

  changeTab(tabSelect: TabSelect): void {
    this.tabChange.emit(tabSelect);
  }
}
