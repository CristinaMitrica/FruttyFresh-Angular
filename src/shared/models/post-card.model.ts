import { Product } from "./products.models";
import { PurchaseForm } from "./purchase-form.model";

export interface PostCart extends PurchaseForm {
    cart: Product[];
}