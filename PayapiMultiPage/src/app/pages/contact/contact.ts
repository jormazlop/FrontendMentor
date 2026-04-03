import { Component } from '@angular/core';
import { Contact1 } from './contact-1/contact-1';
import { Contact2 } from './contact-2/contact-2';

@Component({
  selector: 'payapi-contact',
  imports: [Contact1, Contact2],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export default class Contact {

}
