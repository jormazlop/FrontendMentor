import { Component } from '@angular/core';
import { GridContent } from '@components/grid-content/grid-content';
import { GridContentType } from '@models/model';

@Component({
  selector: 'app-body',
  imports: [GridContent],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  protected readonly grids: GridContentType[] = [
    {
      icon: 'sparkle',
      stat: '2.4M',
      title: 'Students reached',
      description: 'Across 31 countries since 2011.'
    },
    {
      icon: 'plus',
      stat: '1,284',
      title: 'Schools partnered',
      description: 'In 14 countries, from Kenya to Guatemala.'
    },
    {
      icon: 'arrow-right',
      stat: '38K',
      title: 'Teachers trained',
      description: 'Equipped with modern tools and methodology.'
    },
    {
      icon: 'trending-up',
      stat: '3.1×',
      title: 'Graduation lift',
      description: 'Partner schools outperform national averages 3x.'
    }
  ]
}
