import { Component, signal } from '@angular/core';
import { CheckItemComponent } from '@components/check-item/check-item.component';

@Component({
  selector: 'app-read-together',
  imports: [CheckItemComponent],
  templateUrl: './read-together.component.html',
  styleUrl: './read-together.component.scss'
})
export class ReadTogetherComponent {
  items = signal([
    'Monthly curated tech reads selected by industry experts',
    'Virtual and in-person meetups for deep-dive discussions',
    'Early access to new tech book releases',
    'Author Q&A sessions with tech thought leaders'
  ]);
}
