import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-board-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './board-checkbox.component.html',
  styleUrl: './board-checkbox.component.scss',
})
export class BoardCheckboxComponent {
  @Output() clickBox = new EventEmitter();

  value = input<'x' | 'o' | ''>('');

  disabled = computed(() => this.value());

  onClickBox(): void {
    if (!this.disabled()) {
      this.clickBox.emit();
    }
  }
}
