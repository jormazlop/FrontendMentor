import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-more-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './more-button.component.html',
  styleUrl: './more-button.component.scss'
})
export class MoreButtonComponent {
  active = input<boolean>(false);
}
