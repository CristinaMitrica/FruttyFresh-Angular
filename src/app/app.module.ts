import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from '../shared/components/molecules/product-card/product-card.component';
import { HeaderPageComponent } from './layout/header-page/header-page.component';
import { FooterPageComponent } from './layout/footer-page/footer-page.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HeaderPageComponent,
    FooterPageComponent,
    AllProductsComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
