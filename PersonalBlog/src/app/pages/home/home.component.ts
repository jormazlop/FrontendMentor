import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: '<home-page (articles)=viewAllArticles()></home-page>',
  styles: ':host {display: contents}',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent {

  private router = inject(Router);

  viewAllArticles(): void {
    this.router.navigate(['blog']);
  }
}
