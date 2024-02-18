import { Component, input } from '@angular/core';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {

  enabled = input<boolean>(true);

}
