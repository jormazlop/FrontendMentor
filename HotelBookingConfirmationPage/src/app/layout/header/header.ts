import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonPrimary } from '@components/button-primary/button-primary';
import { ButtonSecondary } from '@components/button-secondary/button-secondary';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe, ButtonPrimary, ButtonSecondary],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
