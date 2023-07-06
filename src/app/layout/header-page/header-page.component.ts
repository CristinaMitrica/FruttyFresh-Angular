import { Component } from '@angular/core';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {
  public title:string = 'Hola mundo';
  public cartCounter: number | null = null;

  constructor (
    private cartService: CartService,
  ) {}

  ngOnInit():void {
    this.getcartCounter();
  }

  private getcartCounter():void {
    this.cartService.getcartCounter().subscribe((response) =>
      {
        this.cartCounter = response;
      }
    )
  }

}
