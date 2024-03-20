import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-like-counter',
  standalone: true,
  imports: [],
  templateUrl: './like-counter.component.html',
  styleUrl: './like-counter.component.scss'
})
export class LikeCounterComponent {

  count = input(0);

  @Output() plus = new EventEmitter();
  @Output() minus = new EventEmitter();

  protected clickPlus(): void {
    this.plus.emit();
  }

  protected clickMinus(): void {
    this.minus.emit();
  }
}
