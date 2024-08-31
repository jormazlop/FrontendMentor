import { Component } from '@angular/core';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutMobilityComponent } from './about-mobility/about-mobility.component';
import { AboutUrbanLivingComponent } from './about-urban-living/about-urban-living.component';
import { AboutValuesComponent } from './about-values/about-values.component';
import { AboutFaqsComponent } from './about-faqs/about-faqs.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutHeaderComponent,
    AboutMobilityComponent,
    AboutUrbanLivingComponent,
    AboutValuesComponent,
    AboutFaqsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {}
