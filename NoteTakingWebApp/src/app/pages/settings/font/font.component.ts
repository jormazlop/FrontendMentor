import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { IconArrowComponent } from '@icons/icon-arrow/icon-arrow.component';
import { IconMonospaceComponent } from '@icons/icon-monospace/icon-monospace.component';
import { IconSansSerifComponent } from '@icons/icon-sans-serif/icon-sans-serif.component';
import { IconSerifComponent } from '@icons/icon-serif/icon-serif.component';
import { ColorTheme } from '@models/color-theme.model';
import { FontTheme } from '@models/font-theme.model';
import { ColorThemeService } from '@services/color-theme.service';
import { FontThemeService } from '@services/font-theme.service';
import { SettingsService } from '@services/settings.service';
import { ToastService } from '@services/toast.service';
import { InputRadioComponent } from 'app/components/inputs/input-radio/input-radio.component';

@Component({
  selector: 'note-font',
  imports: [
    InputRadioComponent,
    ReactiveFormsModule,
    IconSansSerifComponent,
    IconSerifComponent,
    IconMonospaceComponent,
    PrimaryButtonComponent,
    IconArrowComponent,
  ],
  templateUrl: './font.component.html',
  styleUrl: './font.component.scss',
})
export class FontComponent {
    private service = inject(FontThemeService);
    private settingService = inject(SettingsService);
  private toast = inject(ToastService);

    mode = new FormControl<FontTheme>(this.service.font());

    id = Date.now();

    onClick(): void {
      this.service.setMode(this.mode.value!);
      this.toast.settings();
    }

    onClickMenu(): void {
      this.settingService.menu();
    }
}
