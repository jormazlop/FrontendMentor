import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  template: '<newsletter-page></newsletter-page>',
  styles: ':host {display: contents}',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class NewsletterComponent {

}
