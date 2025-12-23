import { Component, signal } from '@angular/core';
import { form, required, schema } from '@angular/forms/signals';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { TextInput } from '@shared/input/text-input/text-input';
import { TextareaInput } from '@shared/input/textarea-input/textarea-input';

type FormModel = {
  question: string,
  answer: string,
  category: string
}

@Component({
  selector: 'flashcard-edit',
  imports: [TextInput, TextareaInput, ButtonPrimary],
  templateUrl: './flashcard-edit.html',
  styleUrl: './flashcard-edit.scss',
})
export class FlashcardEdit {

  formModel = signal<FormModel>({
    question: '',
    answer: '',
    category: ''
  });

  form = form<FormModel>(this.formModel, (schemaPath) => {
    required(schemaPath.question, { message: 'The field question is required!'}),
    required(schemaPath.answer, { message: 'The field answer is required!'}),
    required(schemaPath.category, { message: 'The field category is required!'})
  });

  onCreateCard(event: Event): void {
    event.preventDefault();
    console.log('AAAA')
  }
}
