import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/shared/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Product[] = [];

  private cartCounter:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { };

  public addProduct(product:Product):void {
    this.cart = [...this.cart, product];
    // this.cart.push(product)
    this.updateCartCounter();
  }

  public removeProduct({id}:Product):void {
    const index:number = this.cart.findIndex((product:Product) => product.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.updateCartCounter();
    }
  }

  public getCart():Product[] {
    return this.cart;
  }

  public getCartCounter():Observable<number> {
    return this.cartCounter.asObservable();
  }

  private updateCartCounter():void {
    this.cartCounter.next(this.cart.length);
  }
}
