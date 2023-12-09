import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterInfoComponent } from '../../components/footer-info/footer-info.component';
import { FooterSvgComponent } from '../../components/footer-svg/footer-svg.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, FooterInfoComponent, FooterSvgComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
