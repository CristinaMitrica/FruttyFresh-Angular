import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailsRoutingModule } from './cart-details-routing.module';

import { CartProductCardComponent } from './molecules/cart-product-card/cart-product-card.component';
import { PurchaseFormComponent } from './organisms/purchase-form/purchase-form.component';
import { CartProductsComponent } from './organisms/cart-products/cart-products.component';
import { CartDetailsComponent } from './cart-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartProductCardComponent,
    CartProductsComponent,
    PurchaseFormComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    CartDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartDetailsModule { }
