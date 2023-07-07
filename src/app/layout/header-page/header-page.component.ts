import { Component } from '@angular/core';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {
  public cartCounter: number | null = null;

  constructor (
    private cartService: CartService,
  ) {}

  ngOnInit():void {
    this.getCartCounter();
  }

  private getCartCounter():void {
    this.cartService.getCartCounter().subscribe((response) =>
      {
        this.cartCounter = response;
      }
    )
  }
}
