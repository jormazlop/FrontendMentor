import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-footer-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer-input.component.html',
  styleUrl: './footer-input.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FooterInputComponent {

  modalService = inject(NgbModal);
  emailControl = new FormControl('', Validators.compose([Validators.required, Validators.email]));

  sendMail(): void {
    this.emailControl.reset();
    this.modalService.open(SuccessDialogComponent);
  }
}
