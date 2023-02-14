import axios from '../utils/axios';
import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { ICartItem } from '../Interface/cartItem.interface';
import { IProduct } from '../Interface/product.interface';
import { ICart } from '../Interface/cart.interface';
import { stat } from 'fs';

export type CartContextType = {
  cartItems: ICartItem[];
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [userCart, setUserCart] = useState<ICart>();
  useEffect(() => {
    axios
      .get(`carts/my-cart`)
      .then((res) => {
        setUserCart(res.data);
      })
      .catch((err) => console.log('cart error', err));
  }, []);
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: userCart?.cartItems,
  });

  const addToCart = (product: IProduct) => {
    const updatedCartItems = [...state.cartItems, product];

    dispatch({
      type: 'ADD',
      payload: {
        cartItems: updatedCartItems,
      },
    });
  };

  const removeFromCart = (id: string) => {
    const updatedCartItems = state.cartItems.filter(
      (currentCartItem: ICartItem) => currentCartItem.id !== id
    );

    dispatch({
      type: 'REMOVE',
      payload: {
        cartItems: updatedCartItems,
      },
    });
  };

  const contextValue = useMemo(() => {
    return { cartItems: state.cartItems, addToCart, removeFromCart };
  }, [state.cartItems]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

const cartReducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return {
        ...state,
        items: payload.cartItems,
      };

    case 'REMOVE':
      return {
        ...state,
        items: payload.cartItems,
      };

    default:
      throw new Error('No case for that type');
  }
};

export default CartProvider;
