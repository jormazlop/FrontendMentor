import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Step {
  steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

  stepForm = new FormGroup({});

}
