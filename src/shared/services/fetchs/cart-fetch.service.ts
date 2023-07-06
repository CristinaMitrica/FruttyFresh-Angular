import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/shared/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartFetchService {
  private cart:Product[] = [];

  private cartCounter:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { };

  public addProduct(product:Product):void {
    this.cart = [...this.cart, product];
    // this.cart.push(product)
    this.updatecartCounter();
  }

  public removeProduct({id}:Product):void {
    const index:number = this.cart.findIndex((product:Product) => product.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.updatecartCounter();
    }
  }

  public getcart():Product[] {
    return this.cart;
  }

  public getcartCounter():Observable<number> {
    return this.cartCounter.asObservable();
  }

  private updatecartCounter():void {
    this.cartCounter.next(this.cart.length);
  }
}
