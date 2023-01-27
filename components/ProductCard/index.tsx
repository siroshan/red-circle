import Image from 'next/image';
import WineImg from '/public/products/wine.png';
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { IProduct } from '../../Interface/product.interface';
import Link from 'next/link';

type ProdCardProps = {
  product: IProduct;
};

const ProductCard: FC<ProdCardProps> = ({ product }) => {
  return (
    <Link
      href={`products/${product.id}`}
      className='product-card-wrap'
      vocab='https://schema.org/'
      typeof='Product'
    >
      <Typography
        property='name'
        textTransform='capitalize'
        color='common.black'
        mb={3}
      >
        {product.name}
      </Typography>
      <div className='img-wrap'>
        <Image
          fill
          src={product.image}
          priority
          alt='product image'
          property='image'
        />
      </div>
      <div className='detail-wrap'>
        <Typography
          fontWeight={600}
          textTransform='capitalize'
          color='secondary.light'
          className='type'
        >
          {product.type}
        </Typography>
        <Typography fontWeight={600} color='secondary.light' className='qty'>
          {product.volume}ml
        </Typography>
        <span className='price' property='priceCurrency'>
          $
        </span>
        <span className='price' property='price'>
          {product.price}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
