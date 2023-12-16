import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed, inject } from '@angular/core';
import { FaqService } from '../../../services/faq.service';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
})
export class FaqItemComponent {

  @Input() id!: number;

  expanded: Signal<boolean> = computed(() => this.faqService.expandedItem() === this.id);

  faqService = inject(FaqService);

  expandAccordeon() {
    this.faqService.expandItem(this.expanded() ? 0 : this.id);
  }
}
