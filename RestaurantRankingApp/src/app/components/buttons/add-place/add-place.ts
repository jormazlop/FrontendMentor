import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-add-place',
  styleUrl: './add-place.scss',
  templateUrl: './add-place.html',
})
export class AddPlace {
  onAddPlace(): void {
    window.alert(
      'Not implemented! Sorry for the inconvenience, but this project was becoming too big for my taste.'
    );
  }
}
