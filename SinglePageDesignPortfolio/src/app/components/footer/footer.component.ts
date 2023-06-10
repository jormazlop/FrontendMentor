import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
