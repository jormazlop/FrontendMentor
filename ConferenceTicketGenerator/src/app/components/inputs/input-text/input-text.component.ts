import { Component } from '@angular/core';
import { InputAbstractComponent } from '../input-abstract/input-abstract.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorPipe } from '../input-error.pipe';

@Component({
  selector: 'app-input-text',
  imports: [InputErrorPipe, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent extends InputAbstractComponent {

}
