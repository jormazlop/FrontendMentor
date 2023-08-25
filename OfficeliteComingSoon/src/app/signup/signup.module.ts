import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpRoutingModule } from './signup-routing.module';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './body/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    SignupComponent,
    BodyComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class SignupModule { }
