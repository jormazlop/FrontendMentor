import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-cart-button.component.html',
  styleUrl: './add-cart-button.component.scss'
})
export class AddCartButtonComponent {

  add = output();

  addToCart(): void {
    this.add.emit();
  }

}
