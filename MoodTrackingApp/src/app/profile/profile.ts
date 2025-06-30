import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PrimaryButton } from '@shared/buttons/primary-button/primary-button';
import { Close } from '@shared/icons/close/close';
import { ProfileService } from '@shared/services/profile';

@Component({
  selector: 'app-profile',
  imports: [Close, PrimaryButton, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private readonly dialog = inject(MatDialogRef<Profile>);
  private readonly service = inject(ProfileService);

  name = model(this.service.name());
  url = model(this.service.url());

  closeDialog(): void {
    this.dialog.close();
  }

  saveChanges(): void {
    this.service.setName(this.name());
    this.service.setUrl(this.url());
    this.closeDialog();
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        this.url.set(event.target.result);
      };
    }
  }
}
