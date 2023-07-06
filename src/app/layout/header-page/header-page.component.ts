import { Component } from '@angular/core';
import { CartFetchService } from 'src/shared/services/fetchs/cart-fetch.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {
  public title:string = 'Hola mundo';
  public cartCounter: number | null = null;

  constructor (
    private cartFetchService: CartFetchService,
  ) {}

  ngOnInit():void {
    this.getcartCounter();
  }

  private getcartCounter():void {
    this.cartFetchService.getcartCounter().subscribe((response) =>
      {
        this.cartCounter = response;
      }
    )
  }

}
