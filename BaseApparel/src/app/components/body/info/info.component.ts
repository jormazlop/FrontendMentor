import { Component, HostListener, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { ModeService } from 'src/app/services/mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnDestroy {

  mailForm = this.initialiseMailForm();

  mode = false;

  subscriptions: Subscription[] = [];

  constructor(private snackBar: MatSnackBar, private modeService: ModeService, private cd: ChangeDetectorRef) {
    this.subscriptions.push(
      this.modeService.getMode().subscribe((mode: boolean) => {
        this.mode = mode;
      })
    );
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownEnter(event: KeyboardEvent) {
    if (this.mailForm.valid) {
      this.submitForm();
    }
  }

  initialiseMailForm(): FormGroup {
    return new FormGroup({
      mail: new FormControl('', [Validators.required, this.validateMail])
    })
  }

  validateMail(control: AbstractControl) {
    if (!control.value.match(/\S+@\S+\.\S+/)) {
      return { invalidMail: true };
    }
    return null;
  }

  submitForm(): void {

    let snackBarRef = this.snackBar.open('Email saved!', 'Dismiss', {
      panelClass: this.mode? ['angular-dark-snackbar'] : ['angular-light-snackbar'],
    });

    this.subscriptions.push(
      snackBarRef.afterDismissed().subscribe((value: MatSnackBarDismiss) => {
        if (value.dismissedByAction) {
          this.mailForm = this.initialiseMailForm();
          this.cd.detectChanges();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe);
  }

}
