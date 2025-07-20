import { TitleCasePipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { KeyboardLetter } from '@shared/components/keyboard-letter/keyboard-letter';
import { MenuButton } from '@shared/components/menu-button/menu-button';
import { PlayLetter } from '@shared/components/play-letter/play-letter';
import { Categories } from '@shared/models/categorie';
import { CategorieService } from '@shared/services/categorie';
import { Stepper } from './stepper/stepper';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Pause } from '@shared/modals/pause/pause';
import { Lose } from '@shared/modals/lose/lose';
import { Win } from '@shared/modals/win/win';

@Component({
  selector: 'app-categorie',
  imports: [MenuButton, PlayLetter, KeyboardLetter, Stepper, DialogModule],
  templateUrl: './categorie.html',
  styleUrl: './categorie.scss',
})
export default class Categorie {
  private readonly service = inject(CategorieService);
  private readonly titlePipe = new TitleCasePipe();
  private readonly dialog = inject(Dialog);

  categorie = input<string>('');
  readonly categorieId = computed<keyof Categories>(
    () => this.titlePipe.transform(this.categorie()) as keyof Categories
  );
  private readonly data = toSignal(this.service.getData());

  private readonly questions = computed(() =>
    this.data() ? this.data()!.categories[this.categorieId()] : []
  );

  index = signal(0);
  total = computed(() => this.questions()?.length);

  question = computed(() =>
    this.questions()?.length ? this.questions()[this.index()] : null
  );

  letters = computed<string[]>(
    () => this.question()?.name.toUpperCase().split('') ?? []
  );

  keyLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  selection = signal<string[]>([]);

  wrong = computed(() => this.selection().filter(letter => !this.letters().includes(letter)).length);

  constructor() {
    effect(() => {

      if(this.wrong() >= 7) {
        this.openLoseDialog();
      }

      const guessFinished = !!this.letters().length && this.letters().filter(val => val != ' ').every(letter => this.selection().includes(letter));

      if(guessFinished) {
        this.openWinDialog();
      }
    });

    effect(() => {
      if(this.total()) {
        this.nextQuestion();
      }
    });
  }

  selectLetter(letter: string): void {
    this.selection.update((list) => {
      list.push(letter);
      return [...list];
    });
  }

  private nextQuestion(): void {
    this.index.set(Math.floor(Math.random() * this.total()));
    this.selection.set([]);
  }

  openPauseDialog(): void {
    this.dialog.open(Pause, { disableClose: true });
  }

  openLoseDialog(): void {
    const dialogRef = this.dialog.open(Lose, { disableClose: true });
    dialogRef.closed.subscribe(() => this.nextQuestion());
  }

  openWinDialog(): void {
    const dialogRef = this.dialog.open(Win, { disableClose: true });
    dialogRef.closed.subscribe(() => this.nextQuestion());
  }

}
