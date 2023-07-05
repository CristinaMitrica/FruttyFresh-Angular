import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { CartDetailsRoutingModule } from './cart-details-routing.module';

import { CartDetailsComponent } from './cart-details.component';



@NgModule({
  declarations: [
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartDetailsRoutingModule
  ]
})
export class CartDetailsModule { }
