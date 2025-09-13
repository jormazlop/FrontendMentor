import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractInput } from '@inputs/abstract-input/abstract-input';
import { ErrorMessagePipe } from 'shared/utils/error-message-pipe';

@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule, ErrorMessagePipe],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss'
})
export class TextInput extends AbstractInput {

  constructor() {
    super();
  }
}
