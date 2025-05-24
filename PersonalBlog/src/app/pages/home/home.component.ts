import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from '@services/section.service';

@Component({
  template: '<home-page (articles)=viewAllArticles()></home-page>',
  styles: ':host {display: contents}',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent {

  private router = inject(Router);
  private section = inject(SectionService);

  viewAllArticles(): void {
    this.router.navigate(['blog']);
    this.section.setSection('blog');
  }
}
