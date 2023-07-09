import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/products.models';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})

export class CartProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor (
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.products = this.cartService.getCart();
  };
}
