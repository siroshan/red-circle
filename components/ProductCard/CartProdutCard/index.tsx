import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ICart } from '../../../Interface/cart.interface';
import { ICartItem } from '../../../Interface/cartItem.interface';
import { numberFormat } from '../../../utils/numberFormat';
import NumberInput from '../../UI/NumberInput';

const CartProductCard: FC<{ cartItem: ICartItem }> = ({ cartItem }) => {
  const [qty, setQty] = useState(cartItem.qty);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='cart-product-card' key={cartItem.id}>
      <div className='flex-item w-30'>
        <div className='img-wrap'>
          <Image
            fill
            src={cartItem.product.image}
            priority
            alt='product image'
            property='image'
          />
        </div>
      </div>
      <div className='flex-item w-30'>
        <Typography color='secondary.dark' variant='body1'>
          {cartItem.product.name}
        </Typography>
        <Typography color='secondary.main' variant='subtitle1'>
          {cartItem.product.volume} ml
        </Typography>
        <Typography color='secondary.dark' variant='subtitle1'>
          ${numberFormat(cartItem.product.price)}
        </Typography>
      </div>
      <div className='flex-item w-20'>
        <Typography color='secondary.dark' variant='body1'>
          <NumberInput
            qty={qty}
            setQty={setQty}
            maxQty={10}
            isDisabled={isLoading}
          />
        </Typography>
      </div>
      <div className='flex-item w-20'>
        <Typography color='secondary.dark' textAlign='right' variant='body1'>
          ${numberFormat(cartItem.product.price * cartItem.qty)}
        </Typography>
      </div>
    </div>
  );
};

export default CartProductCard;
