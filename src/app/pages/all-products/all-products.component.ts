import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/products.models';
import { ProductsFetchService } from 'src/shared/services/fetchs/products-fetch.service';
import { FiltersService } from './services/filters.service';

@Component({
  selector: 'app-all-components',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  public filteredProducts: Product[] = [];
  private products: Product[] = [];

  constructor (
    private productsFetchService: ProductsFetchService,
    private filtersService: FiltersService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public applyFilter(filter: string): void {
    const filters: string[] = this.filtersService.handleFilters(filter);
    this.filteredProducts = filters.length === 0
      ? this.products
      : this.products.filter((product: Product) => filters.includes(product.type));
  }

  public isFilterActive(filter: string): boolean {
    return this.filtersService.isFilterActive(filter);
  }

  private getProducts(): void {
    this.productsFetchService.getProducts().subscribe((response)=>{
      this.products = response;
      this.filteredProducts = response;
    });
  }
}
