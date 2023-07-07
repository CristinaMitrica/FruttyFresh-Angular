import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent {

  public form!:FormGroup;
  public cartCounter: number | null = null;

  constructor(private formBuilder: FormBuilder, private cartService:CartService) { }

  ngOnInit():void {
    this.initForm();
  }

  private initForm():void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit():void {
    if (this.form.valid) {
      // Realizar acciones con los datos del formulario
      console.log(this.form.value);
    }
  }
}
