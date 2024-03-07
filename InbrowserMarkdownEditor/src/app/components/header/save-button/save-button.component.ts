import { Component, inject } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.scss'
})
export class SaveButtonComponent {
  private documentService = inject(DocumentsService);

  protected saveDocument(): void {
    this.documentService.saveDocument();
  }
}
