import { ICart } from './cart.interface';
import { IProduct } from './product.interface';

export interface ICartItem {
  id: string;
  cart: ICart;
  product: IProduct;
  qty: number;
}
