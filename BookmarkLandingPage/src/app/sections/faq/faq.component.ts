import { Component, signal } from '@angular/core';
import { AccordeonComponent } from '@components/accordeon/accordeon.component';
import { Accordeon } from '@components/accordeon/models/accordeon.model';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-faq',
  imports: [AccordeonComponent, ButtonComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  questions = signal<Accordeon[]>([
    {
      question: `What is Bookmark?`,
      response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                 justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`
    },
    {
      question: `How can I request a new browser?`,
      response: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                 Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                 ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                 Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`
    },
    {
      question: `Is there a mobile app?`,
      response: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                 urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                 sollicitudin ex et ultricies bibendum.`
    },
    {
      question: `What about other Chromium browsers?`,
      response: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                 vitae neque eget nisl gravida pellentesque non ut velit.`
    }
  ])
}
