import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/products.models';
import { CartFetchService } from 'src/shared/services/fetchs/cart-fetch.service';
import { ProductsFetchService } from 'src/shared/services/fetchs/products-fetch.service';

@Component({
  selector: 'app-all-components',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  public products:Product[] = [];

  constructor (
    private cartFetchService: CartFetchService,
    private productsFetchService: ProductsFetchService,
  ) {}

  ngOnInit():void {
    this.getProducts();
  }

  private getProducts():void {
    this.productsFetchService.getProducts().subscribe((response)=>{
      this.products = response;
    });
  }
}
