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
import { AxiosResponse } from 'axios';
import { axiosErrorHandler } from '../utils/axiosErrorHandler';

export type CartContextType = {
  cartItems: ICartItem[];
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  console.log('cart provider');

  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  useEffect(() => {
    axios
      .get(`carts/my-cart`)
      .then((res) => {
        dispatch({
          type: 'INIT',
          payload: {
            cartItems: res.data.cartItems,
          },
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log('cart init error 404', err);
        }
        console.log('cart init error', err);
      });
  }, []);

  const addToCart = (product: IProduct, qty: number) => {
    axios
      .patch('carts/add', {
        productID: product.id,
        qty: qty,
      })
      .then((res) => {
        console.log('add response', res.data);
        dispatch({
          type: 'ADD',
          payload: {
            cartItems: res.data.cartItems,
          },
        });
      })
      .catch((err) => {
        axiosErrorHandler(err);
      });
  };

  const removeFromCart = (cartItemID: string) => {
    axios
      .patch(`carts/remove/${cartItemID}`)
      .then((res) => {
        const updatedCartItems = state.cartItems.filter(
          (currentCartItem: ICartItem) => currentCartItem.id !== cartItemID
        );
        dispatch({
          type: 'REMOVE',
          payload: {
            cartItems: updatedCartItems,
          },
        });
      })
      .catch((err) => {
        axiosErrorHandler(err);
      });
  };

  const updateQty = (cartItemID: string, qty: string) => {
    const updatedCartItems = state.cartItems.filter(
      (currentCartItem: ICartItem) => currentCartItem.id !== cartItemID
    );
    const updatedCartItem = state.cartItems.find(
      (currentCartItem: ICartItem) => currentCartItem.id === cartItemID
    );
    updatedCartItem.qty = qty;

    updatedCartItems.push(updatedCartItem);

    axios
      .patch(`carts/updateQty/${cartItemID}?qty=${qty}`)
      .then((res) => {
        dispatch({
          type: 'UPDATE_QTY',
          payload: {
            cartItems: updatedCartItems,
          },
        });
      })
      .catch((err) => {
        console.log('error update', err);
        axiosErrorHandler(err);
      });
  };

  const contextValue = useMemo(() => {
    return { cartItems: state.cartItems, addToCart, removeFromCart, updateQty };
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const cartReducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT':
      return {
        cartItems: payload.cartItems,
      };
    case 'ADD':
      return {
        cartItems: payload.cartItems,
      };

    case 'REMOVE':
      return {
        cartItems: payload.cartItems,
      };

    case 'UPDATE_QTY':
      return {
        ...state,
        cartItems: payload.cartItems,
      };

    default:
      return {
        ...state,
      };
  }
};

export default CartProvider;
