import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/shared/models/products.models';
import { CartFetchService } from 'src/shared/services/fetchs/cart-fetch.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public product!: Product;

  constructor (
    private cartFetchService: CartFetchService,
  ) {}

  public addProductToCart(product:Product):void {
    this.cartFetchService.addProduct(product);
  }

  public removeProductFromCart(product:Product):void {
    this.cartFetchService.removeProduct(product);
  }
}
