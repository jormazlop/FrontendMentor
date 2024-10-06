import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract/input-abstract.component';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss'
})
export class InputTextareaComponent extends InputAbstractComponent {

}
