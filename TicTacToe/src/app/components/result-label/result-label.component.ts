import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-label',
  standalone: true,
  imports: [NgClass],
  templateUrl: './result-label.component.html',
  styleUrl: './result-label.component.scss'
})
export class ResultLabelComponent {
  @Input() color: 'blue' | 'silver' | 'yellow' = 'blue';
}
