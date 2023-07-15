import { Component, Input as FeatureInput } from '@angular/core';
import { Feature } from 'src/app/shared/models/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {

  @FeatureInput({required: true}) feature: Feature = new Feature();

}
