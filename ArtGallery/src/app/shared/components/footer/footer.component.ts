import { Component, Input as SectionInput } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  @SectionInput({required: true}) section?: number;

}
