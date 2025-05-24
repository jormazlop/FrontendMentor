import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  template: '<blog-page></blog-page>',
  styles: ':host {display: contents}',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class BlogComponent {

}
