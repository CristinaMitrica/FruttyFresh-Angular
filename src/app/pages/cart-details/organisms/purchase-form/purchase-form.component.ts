import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostCart } from 'src/shared/models/post-card.model';
import { Product } from 'src/shared/models/products.models';
import { PurchaseForm } from 'src/shared/models/purchase-form.model';
import { CartService } from 'src/shared/services/cart.service';
import { CartFetchService } from 'src/shared/services/fetchs/cart-fetch.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {

  public form!: FormGroup;
  public cartCounter: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private cartFetchService: CartFetchService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if(this.form.valid) {
      const formValues: PurchaseForm = this.form.value;
      const cart: Product[] = this.cartService.getCart();
      const postBody: PostCart = {
        ...formValues,
        cart
      }
      this.cartFetchService.postCart(postBody);
      // A continuación, nos deberiamos subscribir a la respuesta
    }
  }
}
