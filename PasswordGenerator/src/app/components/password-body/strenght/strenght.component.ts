import { Component, effect, inject } from '@angular/core';
import { PasswordService } from '../../../services/password.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-strenght',
  standalone: true,
  imports: [NgClass],
  templateUrl: './strenght.component.html',
  styleUrl: './strenght.component.scss'
})
export class StrenghtComponent {

  difficulty$ = inject(PasswordService).difficulty$;

  boxClass: 'too-weak' | 'weak' | 'medium' | 'strong' | '' = '';

  effectDifficulty = effect(() => {
    switch(this.difficulty$()) {
      case 'TOO WEAK!':
        this.boxClass = 'too-weak';
        break;
      case 'WEAK':
        this.boxClass = 'weak';
        break;
      case 'MEDIUM':
        this.boxClass = 'medium';
        break;
      case 'STRONG':
        this.boxClass = 'strong';
        break;
      default:
        this.boxClass = '';
        break;
    }
  })



}
