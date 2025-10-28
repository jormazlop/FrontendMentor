import { Component, effect, inject, model } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectInput } from '@shared/inputs/select-input/select-input';
import { TextInput } from '@shared/inputs/text-input/text-input';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule, FormsModule, SelectInput, TextInput],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {

  private service = inject(Recipe);


  filterGroup = new FormGroup({
    prepTime: new FormControl(null),
    cookTime: new FormControl(null),
  });

  search = model('');

  constructor() {
    const formSignal = toSignal(this.filterGroup.valueChanges);

    effect(() => {
      const prepTime = formSignal()?.prepTime ?? null;
      const cookTime = formSignal()?.cookTime ?? null;

      this.service.updateFilter(prepTime, cookTime, this.search());
    });
  }
}
