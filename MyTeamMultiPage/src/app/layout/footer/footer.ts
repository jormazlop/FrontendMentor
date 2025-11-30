import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Facebook } from '@shared/icons/facebook/facebook';
import { Pinterest } from '@shared/icons/pinterest/pinterest';
import { Twitter } from '@shared/icons/twitter/twitter';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, Facebook, Pinterest, Twitter],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
