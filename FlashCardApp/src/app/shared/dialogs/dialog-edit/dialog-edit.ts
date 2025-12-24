import { Component, inject, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { TextInput } from '@shared/input/text-input/text-input';
import { TextareaInput } from '@shared/input/textarea-input/textarea-input';
import { FlashcardModel, FormModel } from 'model/flashcard.model';

@Component({
  selector: 'app-dialog-edit',
  imports: [TextInput, TextareaInput, ButtonPrimary],
  templateUrl: './dialog-edit.html',
  styleUrl: './dialog-edit.scss',
})
export class DialogEdit {
  private dialogRef = inject(MatDialogRef<DialogEdit>);
  private readonly data = inject<FlashcardModel>(MAT_DIALOG_DATA);

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

  constructor() {
    this.formModel.set({
      question: this.data.question,
      answer: this.data.answer,
      category: this.data.category
    });
  }

  onClickUpdate(): void {
    const card = {} as FlashcardModel;
    card.id = this.data.id;
    card.question = this.formModel().question;
    card.answer = this.formModel().answer;
    card.category = this.formModel().category;
    card.knownCount = this.data.knownCount;

    this.dialogRef.close(card);
    
  }
}
