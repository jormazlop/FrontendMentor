import { Component } from '@angular/core';
import { FooterInputComponent } from '../../components/footer-input/footer-input.component';
import { DrawerIconComponent } from '../../components/drawer-icon/drawer-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterInputComponent, DrawerIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
