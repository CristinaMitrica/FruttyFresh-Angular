import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, map, of } from 'rxjs';
import { Product } from 'src/shared/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchService {

  constructor(
    private http: HttpClient,
  ) {}

  public getProducts():Observable<Product[]> {
    return of(
      {
        data: [
          {
              id: 1,
              name: 'Pera',
              price: 5,
              type: 'fruta'
          },
          {
              id: 2,
              name: 'Espárrago',
              price: 10,
              type: 'verdura'
          },
          {
              id: 3,
              name: 'Cebolla',
              price: 11,
              type: 'verdura'
          },
          {
             id: 4,
              name: 'Limón',
              price: 4,
              type: 'fruta'
          },
          {
              id: 5,
              name: 'Plátano',
              price: 8,
              type: 'fruta'
          },
          {
             id: 6,
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


