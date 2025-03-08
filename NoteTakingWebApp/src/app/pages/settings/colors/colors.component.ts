import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { IconArrowComponent } from '@icons/icon-arrow/icon-arrow.component';
import { IconDarkComponent } from '@icons/icon-dark/icon-dark.component';
import { IconLightComponent } from '@icons/icon-light/icon-light.component';
import { IconSunComponent } from '@icons/icon-sun/icon-sun.component';
import { ColorTheme } from '@models/color-theme.model';
import { ColorThemeService } from '@services/color-theme.service';
import { SettingsService } from '@services/settings.service';
import { InputRadioComponent } from 'app/components/inputs/input-radio/input-radio.component';

@Component({
  selector: 'note-colors',
  imports: [
    InputRadioComponent,
    ReactiveFormsModule,
    IconSunComponent,
    IconDarkComponent,
    IconLightComponent,
    PrimaryButtonComponent,
    IconArrowComponent
  ],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
})
export class ColorsComponent {

  private service = inject(ColorThemeService);
  private settingService = inject(SettingsService);

  mode = new FormControl<ColorTheme>(this.service.color());

  id = Date.now();

  onClick(): void {
    this.service.setMode(this.mode.value!)
  }

  onClickMenu(): void {
    this.settingService.menu();
  }
}
