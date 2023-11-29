import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, LabelComponent, ButtonComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
