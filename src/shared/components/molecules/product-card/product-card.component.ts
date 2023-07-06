import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/shared/models/products.models';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public product!: Product;

  constructor (
    private cartService: CartService,
  ) {}

  public addProductToCart(product:Product):void {
    this.cartService.addProduct(product);
  }

  public removeProductFromCart(product:Product):void {
    this.cartService.removeProduct(product);
  }
}
