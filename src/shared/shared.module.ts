import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/molecules/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule { }
