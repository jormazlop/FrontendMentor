import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { IconArrowComponent } from '@icons/icon-arrow/icon-arrow.component';
import { SettingsService } from '@services/settings.service';
import { InputPasswordComponent } from 'app/components/inputs/input-password/input-password.component';

@Component({
  selector: 'note-password',
  imports: [
    InputPasswordComponent,
    ReactiveFormsModule,
    PrimaryButtonComponent,
    FormsModule,
    IconArrowComponent
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
})
export class PasswordComponent {

  private settingService = inject(SettingsService);

  id = Date.now();

  form = new FormGroup({
    old: new FormControl('', [Validators.required]),
    new: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm: new FormControl('', [
      Validators.required,
      this.samePass,
    ]),
  });

  onSubmit(): void {}

  samePass(
    control: AbstractControl
  ): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    return control.parent?.value.new === control.value ? null : { samePass: true };
  }

  onClickMenu(): void {
    this.settingService.menu();
  }
}
