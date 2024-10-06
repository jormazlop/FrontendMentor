import { Component } from '@angular/core';
import { PortfolioBookmark1Component } from './portfolio-bookmark-1/portfolio-bookmark-1.component';
import { PortfolioBookmark2Component } from './portfolio-bookmark-2/portfolio-bookmark-2.component';
import { PortfolioBookmark3Component } from './portfolio-bookmark-3/portfolio-bookmark-3.component';
import { PortfolioBookmark4Component } from './portfolio-bookmark-4/portfolio-bookmark-4.component';

@Component({
  selector: 'app-portfolio-bookmark',
  standalone: true,
  imports: [
    PortfolioBookmark1Component,
    PortfolioBookmark2Component,
    PortfolioBookmark3Component,
    PortfolioBookmark4Component,
  ],
  templateUrl: './portfolio-bookmark.component.html',
  styleUrl: './portfolio-bookmark.component.scss',
})
export default class PortfolioBookmarkComponent {}
