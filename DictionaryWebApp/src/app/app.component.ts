import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ModeService } from './services/mode.service';
import { NgClass } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WordService } from './services/word.service';
import { ResultComponent } from './components/result/result.component';
import { ResultSeparatorComponent } from './components/result/result-separator/result-separator.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchInputComponent,
    NgClass,
    ReactiveFormsModule,
    ResultComponent,
    NoResultComponent,
    SpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'DictionaryWebApp';

  font = inject(ModeService).font;

  mode = inject(ModeService).mode;

  wordService = inject(WordService);

  wordResult$ = this.wordService.wordResult$;

  error$ = this.wordService.error$;

  loading$ = this.wordService.loading$;

  formGroup = new FormGroup({
    searchControl: new FormControl('', Validators.required),
  });

  constructor() {
    effect(() => {
      this.formGroup.controls.searchControl.patchValue(this.wordService.word$());
    })
  }

  protected onClickSearch(): void {
    this.wordService.searchWord(this.formGroup.controls.searchControl.value);
  }
}
