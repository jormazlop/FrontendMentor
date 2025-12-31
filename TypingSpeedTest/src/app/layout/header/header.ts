import { Component, inject } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { IconPersonalBest } from '../../shared/icons/icon-personal-best/icon-personal-best';
import { PersonalBest } from '@shared/services/personal-best';
import { PersonalBestPipe } from '@shared/pipes/personal-best-pipe';
import { IconConfig } from '@shared/icons/icon-config/icon-config';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [Logo, IconPersonalBest, PersonalBestPipe, IconConfig, RouterLink, TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  personalBest = inject(PersonalBest).personalBest;
}
