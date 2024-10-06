import { Component } from '@angular/core';
import { InputAbstractComponent } from '../input-abstract/input-abstract.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent extends InputAbstractComponent {

}
