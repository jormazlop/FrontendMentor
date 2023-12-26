import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss'
})
export class GettingStartedComponent {

}
