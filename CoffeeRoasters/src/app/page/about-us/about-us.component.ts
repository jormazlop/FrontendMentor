import { Component } from '@angular/core';
import { AboutUsPresentationComponent } from './about-us-presentation/about-us-presentation.component';
import { AboutUsCommitmentComponent } from './about-us-commitment/about-us-commitment.component';
import { AboutUsQualityComponent } from './about-us-quality/about-us-quality.component';
import { AboutUsHeadquartersComponent } from './about-us-headquarters/about-us-headquarters.component';

const components = [
  AboutUsPresentationComponent,
  AboutUsCommitmentComponent,
  AboutUsQualityComponent,
  AboutUsHeadquartersComponent
]

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [components],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export default class AboutUsComponent {

}
