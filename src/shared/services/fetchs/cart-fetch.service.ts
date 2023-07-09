import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { PostCart } from 'src/shared/models/post-card.model';

@Injectable({
  providedIn: 'root'
})
export class CartFetchService {

  constructor(
    private http: HttpClient,
  ) {};

  public postCart(body: PostCart): Observable<any> {
    const url = 'URL_DEL_ENDPOINT';
    return this.http.post<any>(url, body)
      .pipe(
        first()
      );
  }
}
