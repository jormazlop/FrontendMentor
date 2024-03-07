import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { NewDocumentButtonComponent } from '../../components/new-document-button/new-document-button.component';
import { ModeButtonComponent } from '../../components/mode-button/mode-button.component';
import { DocumentsService } from '../../services/documents.service';
import { DatePipe } from '@angular/common';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [
    NewDocumentButtonComponent,
    ModeButtonComponent,
    DatePipe,
    MenuButtonComponent,
  ],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss',
})
export class SidenavMenuComponent {
  sidenav$ = inject(SidenavService).sidenav$;

  private documentService = inject(DocumentsService);

  documents$ = this.documentService.documents$;

  loadDocument(id: number): void {
    this.documentService.loadDocument(id);
  }
}
