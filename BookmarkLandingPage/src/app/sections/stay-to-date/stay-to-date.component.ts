import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { ErrorComponent } from '@icons/error/error.component';

@Component({
  selector: 'app-stay-to-date',
  imports: [ButtonComponent, ReactiveFormsModule, ErrorComponent],
  templateUrl: './stay-to-date.component.html',
  styleUrl: './stay-to-date.component.scss'
})
export class StayToDateComponent {
  formGroup = new FormGroup({
    contact: new FormControl('', [Validators.email])
  });

  onSubmit = () => { if(this.formGroup.valid) this.formGroup.reset() };

}
