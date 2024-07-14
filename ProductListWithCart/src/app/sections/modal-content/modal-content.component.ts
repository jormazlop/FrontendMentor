import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { CurrencyPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent {

  products = input<Product[]>([]);
  private modalService = inject(NgbModal);

  cartProducts = computed(() => this.products().filter(product => product.quantity));

  total = computed(() =>
    this.products().reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    )
  );

  startOrder(): void {
    this.modalService.dismissAll(2);
  }

}
