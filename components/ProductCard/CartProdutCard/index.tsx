import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { FC, useContext, useEffect, useState } from 'react';
import { ICart } from '../../../Interface/cart.interface';
import { ICartItem } from '../../../Interface/cartItem.interface';
import { numberFormat } from '../../../utils/numberFormat';
import NumberInput from '../../UI/NumberInput';
import Box from '@mui/material/Box';
import { CartContext } from '../../../context/cartContext';

const CartProductCard: FC<{ cartItem: ICartItem }> = ({ cartItem }) => {
  const { updateQty, removeFromCart } = useContext(CartContext);

  const [qty, setQty] = useState(cartItem.qty);

  useEffect(()=> {
    if(qty === 0 && qty !== cartItem.qty) {
      removeFromCart(cartItem.id)
    } 
    if(qty !== cartItem.qty) {
      updateQty(cartItem.id, qty)
    }
  }, [qty])

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Grid
      bgcolor='primary.main'
      container
      direction='row'
      alignItems='flex-start'
      className='cart-product-card'
      p={2}
      borderBottom={1}
      borderColor='common.black'
    >
      <Grid item xs={3}>
        <div className='img-wrap'>
          <Image
            fill
            src={cartItem.product.image}
            priority
            alt='product image'
            property='image'
          />
        </div>
      </Grid>
      <Grid container item xs={9}>
        <Grid item xs={12} sm={12} md={4}>
          <Typography color='secondary.dark' variant='body1' textTransform='capitalize'>
            {cartItem.product.name}
          </Typography>
          <Typography color='secondary.main' variant='subtitle1'>
            {cartItem.product.volume} ml
          </Typography>
          <Typography color='secondary.dark' variant='subtitle1'>
            ${numberFormat(cartItem.product.price)}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={8}
          flexDirection='row'
          justifyContent={{ xs: 'space-between', md: 'center' }}
        >
          <Grid
            item
            xs={6}
            container
            justifyContent={{ xs: 'flex-start', md: 'center' }}
            alignItems='flex-start'
          >
            <NumberInput
              qty={qty}
              setQty={setQty}
              maxQty={10}
              isDisabled={isLoading}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              color='secondary.dark'
              textAlign='right'
              variant='body1'
            >
              ${numberFormat(cartItem.product.price * cartItem.qty)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartProductCard;
