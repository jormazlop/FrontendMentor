import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IconArchiveComponent } from '@icons/icon-archive/icon-archive.component';
import { IconArrowComponent } from '@icons/icon-arrow/icon-arrow.component';
import { IconHomeComponent } from '@icons/icon-home/icon-home.component';
import { IconLogoComponent } from '@icons/icon-logo/icon-logo.component';
import { IconTagComponent } from '@icons/icon-tag/icon-tag.component';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-sidebar-navigation',
  imports: [
    IconLogoComponent,
    IconHomeComponent,
    IconArrowComponent,
    IconArchiveComponent,
    IconTagComponent,
    RouterModule
  ],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss',
})
export class SidebarNavigationComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  tags = inject(NoteService).tags;
}
