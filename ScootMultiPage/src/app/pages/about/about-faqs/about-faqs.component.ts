import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-faqs',
  standalone: true,
  imports: [AccordionComponent, TranslateModule],
  templateUrl: './about-faqs.component.html',
  styleUrl: './about-faqs.component.scss'
})
export class AboutFaqsComponent {

}
