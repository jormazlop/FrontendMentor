import { NgClass } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  type$ = input<'days' | 'hours' | 'minutes' | 'seconds'>('seconds');

  array$ = computed(() => {
    switch(this.type$()) {
      case 'minutes':
      case 'seconds':
        return Array(60).fill(0).map((x,i) => i.toString().padStart(2, '0')).reverse();
      case 'hours':
        return Array(24).fill(0).map((x,i) => i.toString().padStart(2, '0')).reverse();
      case 'days':
        return Array(9).fill(0).map((x,i) => i.toString().padStart(2, '0')).reverse();
    }
  });

  initial$ = computed(() => {
    switch(this.type$()) {
      case 'minutes':
      case 'seconds':
        return '59';
      case 'hours':
        return '23';
      case 'days':
        return '08';
    }
  });

  class$ = computed(() => {
    switch(this.type$()) {
      case 'minutes':
        return 'flip-minutes';
      case 'seconds':
        return 'flip-seconds';
      case 'hours':
        return 'flip-hours';
      case 'days':
        return 'flip-days';
    }
  })

}

