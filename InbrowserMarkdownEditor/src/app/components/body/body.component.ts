import { Component, effect, inject, model } from '@angular/core';
import { MarkdownComponent } from './markdown/markdown.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewService } from '../../services/preview.service';
import { FormsModule } from '@angular/forms';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MarkdownComponent, PreviewComponent, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  preview$ = inject(PreviewService).preview$;

  private documentService = inject(DocumentsService);

  document$ = this.documentService.document$;

  content = model<string>(this.document$().content);

  constructor() {
    effect(() => {
      this.content = model<string>(this.document$().content);
    });
  }

  onDocContentChange(content: string): void {
    const doc = this.documentService.document$();
    doc.content = content;
    this.documentService.changeDocument(doc);
  }
}
