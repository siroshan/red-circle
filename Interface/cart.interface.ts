import { ICartItem } from './cartItem.interface';

export interface ICart {
  id: string;
  user: string;
  cartItems: ICartItem[];
}
