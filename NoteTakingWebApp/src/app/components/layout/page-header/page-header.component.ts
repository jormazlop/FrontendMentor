import { Component, inject, input, OnChanges, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IconLogoComponent } from '@icons/icon-logo/icon-logo.component';
import { IconSettingsComponent } from '@icons/icon-settings/icon-settings.component';
import { InputSearchComponent } from 'app/components/inputs/input-search/input-search.component';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'note-page-header',
  imports: [
    IconLogoComponent,
    InputSearchComponent,
    ReactiveFormsModule,
    IconSettingsComponent,
    RouterModule
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  search = new FormControl('');
  search$ = toSignal(this.search.valueChanges.pipe(debounceTime(500)));
  private router = inject(Router);

  tag = input('');

  titleService = inject(Title);
  title = this.titleService.getTitle();

  constructor() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        setTimeout(() => {
          this.title = this.titleService.getTitle();
        })
      }
    });
  }
}
