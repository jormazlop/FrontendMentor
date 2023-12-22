import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-early-access',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './early-access.component.html',
  styleUrl: './early-access.component.scss'
})
export class EarlyAccessComponent {

  emailControl: FormControl = new FormControl('');


  sendEmail() {
    if(this.emailControl.valid) {
      this.emailControl.patchValue('');
    }
  }

}
