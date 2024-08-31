import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  title = input.required<string>();
  description = input.required<string>();

  open = signal(false);


  onClickMenu(): void {
    this.open.update(val => !val);
  }

}
