import { Directive, effect, inject, input, TemplateRef, untracked, ViewContainerRef } from '@angular/core';
import { JobService } from '@services/job.service';

@Directive({
  selector: '[tags]',
  standalone: true
})
export class TagDirective {

  tags = input.required<string[]>();

  filtreApp = inject(JobService).filtre;

  filterOK = true;

  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  constructor() {

    effect(() => {
      this.filtreApp();

      untracked(() => this.filterOK = this.isInFilter())

      if(!this.filterOK) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

  private isInFilter(): boolean  {
    if (!this.filtreApp().length) return true;

    const intersection = this.filtreApp().filter(f => this.tags().includes(f));

    return intersection.length === this.filtreApp().length;
  }


}
