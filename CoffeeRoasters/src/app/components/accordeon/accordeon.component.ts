import { Component, input, output } from '@angular/core';
import { OptionItem } from '../../page/create-your-plan/create-your-plan-subscription/create-your-plan-subscription.component';

@Component({
  selector: 'app-accordeon',
  standalone: true,
  imports: [],
  templateUrl: './accordeon.component.html',
  styleUrl: './accordeon.component.scss'
})
export class AccordeonComponent {
  option$ = input.required<OptionItem>();

  select = output<number>();

  open = output();

  onSelect(idx: number): void {
    this.select.emit(idx);
  }

  onOpen(): void {
    this.open.emit();
  }
}
