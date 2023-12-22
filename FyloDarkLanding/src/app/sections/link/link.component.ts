import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  constructor() {

  }

  protected showPopup(): void {
    Swal.fire({
      title: 'Coming Soon!',
      text: 'Section not available, sorry for the inconvenience',
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  }

}
