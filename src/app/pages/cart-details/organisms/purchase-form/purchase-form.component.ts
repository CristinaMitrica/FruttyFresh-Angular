import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent {

  public checkoutForm!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit():void {
    this.initForm();
  }

  private initForm():void {
    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit():void {
    if (this.checkoutForm.valid) {
      // Realizar acciones con los datos del formulario
      console.log(this.checkoutForm.value);
    }
  }
}
