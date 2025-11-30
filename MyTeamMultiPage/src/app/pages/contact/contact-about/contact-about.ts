import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-about',
  imports: [],
  templateUrl: './contact-about.html',
  styleUrl: './contact-about.scss',
})
export class ContactAbout {
  abouts = [
    {
      image: '/images/icon-person.svg',
      description: 'The quality of our talent network',
    },
    {
      image: '/images/icon-cog.svg',
      description: 'Usage & implementation of our software',
    },
    {
      image: '/images/icon-chart.svg',
      description: 'How we help drive innovation',
    },
  ];
}
