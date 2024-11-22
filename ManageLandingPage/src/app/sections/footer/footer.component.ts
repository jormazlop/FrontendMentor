import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { IconFacebookComponent } from '../../components/icon-facebook/icon-facebook.component';
import { IconYoutubeComponent } from '../../components/icon-youtube/icon-youtube.component';
import { IconTwitterComponent } from '../../components/icon-twitter/icon-twitter.component';
import { IconPinterestComponent } from '../../components/icon-pinterest/icon-pinterest.component';
import { IconInstagramComponent } from '../../components/icon-instagram/icon-instagram.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    IconFacebookComponent,
    IconYoutubeComponent,
    IconTwitterComponent,
    IconPinterestComponent,
    IconInstagramComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onClickEmail = () => { this.formGroup.reset() }

}
