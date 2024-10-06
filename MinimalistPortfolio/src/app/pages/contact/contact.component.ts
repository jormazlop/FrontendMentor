import { Component } from '@angular/core';
import { Contact1Component } from './contact-1/contact-1.component';
import { Contact2Component } from './contact-2/contact-2.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Contact1Component, Contact2Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent {

}
