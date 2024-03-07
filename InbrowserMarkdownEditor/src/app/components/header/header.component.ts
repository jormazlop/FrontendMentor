import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { InputDocumentComponent } from './input-document/input-document.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { DocumentsService } from '../../services/documents.service';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuButtonComponent,
    InputDocumentComponent,
    SaveButtonComponent,
    NgxSmartModalModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private documentService = inject(DocumentsService);

  document$ = this.documentService.document$;

  deleteButton = viewChild<ElementRef>('deleteButton');

  private ngxSmartModalService = inject(NgxSmartModalService);

  protected openConfirmationDialog(): void {
    this.ngxSmartModalService.getModal('myModal').open();
  }

  protected onClickDeleteDocument(): void {
    this.ngxSmartModalService.getModal('myModal').close();
    this.documentService.deleteDocument();
  }
}
