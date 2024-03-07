import {
  Component,
  ElementRef,
  HostListener,
  Signal,
  ViewChild,
  effect,
  inject,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'app-input-document',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-document.component.html',
  styleUrl: './input-document.component.scss',
})
export class InputDocumentComponent {

  private documentService = inject(DocumentsService);

  document = model(this.documentService.document$().name);

  consultation = signal(true);

  constructor() {
    effect(() => {
      this.document = model(this.documentService.document$().name);
    });
  }

  private docBox: Signal<ElementRef | undefined> = viewChild('docBox');
  private imgBox: Signal<ElementRef | undefined> = viewChild('imgBox');

  @HostListener('document:click', ['$event'])
  onFocusOut(event: Event): void {
    if (!this.docBox()!.nativeElement.contains(event.target) && !this.imgBox()!.nativeElement.contains(event.target)) {
      this.consultation.set(true);
    }
  }

  onFocus(): void {
    this.consultation.set(false);
  }

  onDocNameChange(name: string): void {
    const doc = this.documentService.document$();
    doc.name = name;
    this.documentService.changeDocument(doc);
  }
}
