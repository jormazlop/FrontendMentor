import { Component, input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { DotsComponent } from '@images/dots/dots.component';
import { Extension } from '../models/extension.model';

@Component({
  selector: 'app-extension',
  imports: [DotsComponent, ButtonComponent],
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.scss'
})
export class ExtensionComponent {

  extension = input.required<Extension>();
}
