import { Component, ViewEncapsulation, computed, input } from '@angular/core';
import { PreviewButtonComponent } from './preview-button/preview-button.component';
import { PreviewPipe } from '../../../pipes/preview.pipe';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [PreviewButtonComponent, PreviewPipe],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PreviewComponent {

  preview = input<string>('');

  codedPreview = computed<string[]>(() => {
    const encodedPreview = encodeURI(this.preview());
    return encodedPreview.split(/%0A/g);
  });

  onClickLink():void {
    console.log('AA')
  }
}
