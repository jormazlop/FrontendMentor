import { Component, inject } from '@angular/core';
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  mode = inject(ModeService).mode;
}
