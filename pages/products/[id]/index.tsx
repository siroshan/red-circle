import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ProductBanner from '../../../components/Banners/ProductBanner';
import Carousel from '../../../components/Carousel';
import { GetServerSideProps } from 'next';
import { IProduct } from '../../../Interface/product.interface';
import axios from '../../../utils/axios';
import { FC, useContext, useState } from 'react';
import { AxiosResponse } from 'axios';
import { axiosErrorHandler } from '../../../utils/axiosErrorHandler';
import { appToast } from '../../../utils/appToast';
import { CartContext } from '../../../context/cartContext';

type ProdCardProps = {
  product: IProduct;
  recommendedProducts: IProduct[];
};

const Index: FC<ProdCardProps> = ({ product, recommendedProducts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <Box width={1} bgcolor='primary.light'>
      <Box
        maxWidth={1100}
        mx='auto'
        width={1}
        py={5}
        px={1}
        vocab='https://schema.org/'
        typeof='Product'
      >
        <Grid container direction='row' alignItems='flex-start'>
          <Grid item xs={12} md={6}>
            <Box position='relative' width='100%' height={300}>
              <Image
                src={product.image}
                priority
                style={{ objectFit: 'contain' }}
                fill
                alt='wine image'
                property='image'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textTransform='capitalize'
              className='color-navy-blue'
              fontSize={32}
              property='name'
            >
              {product.name}
            </Typography>
            <Stack direction='row' alignItems='center'>
              <Typography
                color='secondary.light'
                variant='subtitle2'
                width={150}
                textTransform='capitalize'
              >
                {product.type}
              </Typography>
              <Typography
                color='secondary.light'
                variant='subtitle2'
                width={150}
              >
                {product.volume}ml
              </Typography>
            </Stack>
            <Typography color='common.black' mt={4}>
              {product.description}
            </Typography>
            <Typography
              variant='h4'
              color='secondary.light'
              my={4}
              property='price'
            >
              ${product.price}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={() => addToCart(product, qty)}
              disabled={isLoading}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ProductBanner />
      <Carousel products={recommendedProducts} title='Recommended Wines' />
    </Box>
  );
};

export default Index;

export async function getServerSideProps(context: GetServerSideProps) {
  const id = context.params.id;
  const { data: product } = await axios.get<IProduct>(`products/${id}`);
  const { data: recommendedProducts } = await axios.get<IProduct>(`products`);

  return {
    props: { product, recommendedProducts }, // will be passed to the page component as props
  };
}
