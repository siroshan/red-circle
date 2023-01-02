import Image from 'next/image';
import WineImg from '/public/products/wine.png';
import React from 'react';
import Typography from '@mui/material/Typography';

const ProductCard = () => {
  return (
    <div
      className='product-card-wrap'
      vocab='https://schema.org/'
      typeof='Product'
    >
      <Typography property='name' className='color-black' mb={3}>
        Stars in the Dark
      </Typography>
      <div className='img-wrap'>
        <Image src={WineImg} priority alt='product image' property='image' />
      </div>

      <Typography fontWeight={600} color='secondary.light' className='type'>
        Red Wine
      </Typography>
      <Typography fontWeight={600} color='secondary.light' className='qty'>
        750ml
      </Typography>
      <span className='price' property='priceCurrency'>
        $
      </span>
      <span className='price' property='price'>
        14.99
      </span>
    </div>
  );
};

export default ProductCard;
