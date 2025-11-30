import { Component } from '@angular/core';
import { ContactAbout } from './contact-about/contact-about';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactAbout, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export default class Contact {

}
