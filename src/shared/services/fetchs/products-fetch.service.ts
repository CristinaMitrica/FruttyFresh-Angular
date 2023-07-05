import { Injectable } from '@angular/core';
import { Observable, first, map, of } from 'rxjs';
import { Product } from 'src/shared/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchService {

  constructor() { }

  public getProducts():Observable<Product[]> {
    return of(
      {
        data: [
          {
              name: 'Pera',
              price: 5,
              type: 'fruta'
          },
          {
              name: 'Espárrago',
              price: 10,
              type: 'verdura'
          },
          {
              name: 'Cebolla',
              price: 11,
              type: 'verdura'
          },
          {
              name: 'Limón',
              price: 4,
              type: 'fruta'
          },
          {
              name: 'Plátano',
              price: 8,
              type: 'fruta'
          },
          {
              name: 'Zumo',
              price: 13,
              type: 'zumo'
          }
      ]
      }
    ).pipe(
        map((res) => res.data),
        first()
    );
  }
}


