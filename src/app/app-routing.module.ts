import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'all-products', pathMatch: 'full' },
  { path:'all-products', loadChildren: () => import('./pages/all-products/all-products.module').then((m) => m.AllProductsModule) },
  { path:'cart-details', loadChildren: () => import('./pages/cart-details/cart-details.module').then((m) => m.CartDetailsModule),},
  { path: '**', redirectTo: 'all-products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
