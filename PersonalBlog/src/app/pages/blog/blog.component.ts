import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: '<blog-page (detail)="viewDetail($event)"></blog-page>',
  styles: ':host {display: contents}',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class BlogComponent {

  private router = inject(Router);

  viewDetail(event: any): void {
    this.router.navigate(['blog', 'detail', event.detail]);
  }
}
