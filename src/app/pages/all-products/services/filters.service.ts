import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private filters: string[] = [];

  constructor() {}

  public handleFilters(filter: string): string[] {
    this.updateFilters(filter);
    return this.getFilters();
  }

  public isFilterActive(filter: string): boolean {
    return this.filters.includes(filter);
  }

  private getFilters(): string[] {
    return this.filters;
  }

  private addFilter(filter: string): void {
    this.filters = [...this.filters, filter];
  }

  private removeFilter(filter: string): void {
    const filterToRemoveIndex = this.filters.indexOf(filter);
    this.filters.splice(filterToRemoveIndex, 1);
  }

  private updateFilters(filter: string): void {
    this.isFilterActive(filter)
     ? this.removeFilter(filter)
     : this.addFilter(filter);
  }
}