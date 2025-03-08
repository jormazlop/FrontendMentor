import { Component, inject } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconSearchComponent } from '@icons/icon-search/icon-search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'note-input-search',
  imports: [ReactiveFormsModule, IconSearchComponent],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent extends AbstractInputComponent {

  private router = inject(Router);

  onSearch(event: KeyboardEvent): void {
    if (event.key == 'Enter' && this.innerControl.value) {
      this.router.navigateByUrl('search/' + this.innerControl.value);
    }
  }
}
