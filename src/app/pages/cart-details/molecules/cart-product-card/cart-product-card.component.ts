import { Component, Input } from '@angular/core';
import { Product } from 'src/shared/models/products.models';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss']
})
export class CartProductCardComponent {

  @Input() public product!:Product;

  constructor (
    private cartService: CartService,
  ) {}

  public removeProductFromCart(product:Product):void {
    this.cartService.removeProduct(product);
  }
}
