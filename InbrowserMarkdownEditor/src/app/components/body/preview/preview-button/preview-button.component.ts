import { Component, inject } from '@angular/core';
import { PreviewService } from '../../../../services/preview.service';

@Component({
  selector: 'app-preview-button',
  standalone: true,
  imports: [],
  templateUrl: './preview-button.component.html',
  styleUrl: './preview-button.component.scss'
})
export class PreviewButtonComponent {

  private previewService = inject(PreviewService);
  protected preview$ = this.previewService.preview$;


  protected clickPreview(): void {
    this.previewService.changePreview();
  }

}
