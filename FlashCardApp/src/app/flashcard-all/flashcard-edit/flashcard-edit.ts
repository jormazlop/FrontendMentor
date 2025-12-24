import { Component, inject, signal } from '@angular/core';
import { form, required, schema } from '@angular/forms/signals';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { TextInput } from '@shared/input/text-input/text-input';
import { TextareaInput } from '@shared/input/textarea-input/textarea-input';
import { FlashcardModel } from 'model/flashcard.model';
import { FlashcardService } from 'service/flashcard.service';

type FormModel = {
  question: string;
  answer: string;
  category: string;
};

@Component({
  selector: 'flashcard-edit',
  imports: [TextInput, TextareaInput, ButtonPrimary],
  templateUrl: './flashcard-edit.html',
  styleUrl: './flashcard-edit.scss',
})
export class FlashcardEdit {
  private readonly service = inject(FlashcardService);

  formModel = signal<FormModel>({
    question: '',
    answer: '',
    category: '',
  });

  form = form<FormModel>(this.formModel, (schemaPath) => {
    required(schemaPath.question, { message: 'The field question is required!' }),
      required(schemaPath.answer, { message: 'The field answer is required!' }),
      required(schemaPath.category, { message: 'The field category is required!' });
  });

  onCreateCard(event: Event): void {
    event.preventDefault();
    const card = {} as FlashcardModel;
    card.question = this.formModel().question;
    card.answer = this.formModel().answer;
    card.category = this.formModel().category;
    card.knownCount = 0;

    this.service.onCreateCard(card);

    this.form().reset();
    this.formModel.set({
      question: '',
      answer: '',
      category: '',
    });
  }
}
