import { Component, computed, inject, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconCartComponent } from '../icon-cart/icon-cart.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutButtonComponent } from '../checkout-button/checkout-button.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, IconCartComponent, NgbTooltipModule, CheckoutButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private productService = inject(ProductService);
  menu = output();
  quantity$ = this.productService.quantity$;

  total$ = computed(() => this.quantity$() * 125);

  deleteProduct(): void {
    this.productService.deleteProducts();
  }

  openMenu(): void {
    this.menu.emit();
  }

}
