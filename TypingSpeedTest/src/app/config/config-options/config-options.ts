import { TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Language, Mode, Sound } from '@shared/models/config.model';

@Component({
  selector: 'app-config-options',
  imports: [TitleCasePipe],
  templateUrl: './config-options.html',
  styleUrl: './config-options.scss',
})
export class ConfigOptions {
  options = input.required<Language[] | Mode[] | Sound[]>();

  selected = input<Language | Mode | Sound>();
  selectedChange = output<Language | Mode | Sound>();

  onSelectOption(option: Language | Mode | Sound): void {
    this.selectedChange.emit(option);
  }
}
