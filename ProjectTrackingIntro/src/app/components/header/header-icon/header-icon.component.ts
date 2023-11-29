import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-icon.component.html',
  styleUrl: './header-icon.component.scss'
})
export class HeaderIconComponent {

  @Input() type: 'primary' | 'secondary' = 'primary';

}
