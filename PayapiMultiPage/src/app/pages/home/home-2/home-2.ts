import { Component } from '@angular/core';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { LogoGoogle } from '@shared/logos/logo-google/logo-google';
import { LogoHewlettPackard } from '@shared/logos/logo-hewlett-packard/logo-hewlett-packard';
import { LogoMicrosoft } from '@shared/logos/logo-microsoft/logo-microsoft';
import { LogoNvidia } from '@shared/logos/logo-nvidia/logo-nvidia';
import { LogoOracle } from '@shared/logos/logo-oracle/logo-oracle';
import { LogoTesla } from '@shared/logos/logo-tesla/logo-tesla';

@Component({
  selector: 'payapi-home-2',
  imports: [
    ButtonSecondary,
    LogoTesla,
    LogoMicrosoft,
    LogoHewlettPackard,
    LogoOracle,
    LogoGoogle,
    LogoNvidia,
  ],
  templateUrl: './home-2.html',
  styleUrl: './home-2.scss',
})
export class Home2 {}
