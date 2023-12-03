import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-available',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './available.component.html',
  styleUrl: './available.component.scss'
})
export class AvailableComponent {

}
