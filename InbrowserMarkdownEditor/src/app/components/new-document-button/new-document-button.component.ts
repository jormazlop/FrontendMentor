import { Component, inject } from '@angular/core';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'app-new-document-button',
  standalone: true,
  imports: [],
  templateUrl: './new-document-button.component.html',
  styleUrl: './new-document-button.component.scss'
})
export class NewDocumentButtonComponent {

  private documentService = inject(DocumentsService);

  protected onClickNewDocument(): void {
    this.documentService.createDocument();
  }
}
