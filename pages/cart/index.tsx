import Box from '@mui/material/Box';
import axios from '../../utils/axios';
import { ICart } from '../../Interface/cart.interface';
import { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CartProductCard from '../../components/ProductCard/CartProdutCard';
import { axiosErrorHandler } from '../../utils/axiosErrorHandler';
import { numberFormat } from '../../utils/numberFormat';
import Button from '@mui/material/Button';
import { ICartItem } from '../../Interface/cartItem.interface';

const Index: FC = () => {
  const [cart, setCart] = useState<ICart>();
  const [isLoading, setIsLoading] = useState(false);

  const getTotal = (cartItems: ICartItem[]) => {
    let sum: number = 0;

    cartItems.map((cartItem, i) => {
      sum += cartItem.qty * cartItem.product.price;
    });
    return sum;
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ICart>('carts/my-cart')
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        axiosErrorHandler(err);
      });
    setIsLoading(false);
  }, []);
  return (
    <Box width={1} bgcolor='primary.light' py={10} height={1}>
      <Box maxWidth={1280} mx='auto' width={1}>
        {cart?.cartItems && cart.cartItems?.length > 0 ? (
          <>
            {cart.cartItems.map((cartItem, i) => (
              <CartProductCard cartItem={cartItem} key={cartItem.id} />
            ))}
            <Box
              bgcolor='primary.main'
              px={3}
              py={2}
              display='flex'
              justifyContent='space-between'
            >
              <Typography variant='h4' textAlign='right' color='secondary.dark'>
                Total Amount
              </Typography>
              <Typography variant='h4' textAlign='right' color='secondary.dark'>
                ${numberFormat(getTotal(cart?.cartItems))}
              </Typography>
            </Box>
            <Box mt={5} textAlign='right'>
              <Button variant='contained'>Checkout</Button>
            </Box>
          </>
        ) : (
          <Typography variant='h4' textAlign='center' color='secondary.dark'>
            Start adding items to the cart
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Index;
