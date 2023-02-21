import Box from '@mui/material/Box';
import HomeBanner from '../components/Banners/HomeBanner';
import Carousel from '../components/Carousel';
import PromoBanner from '../components/Banners/PromoBanner';
import { GetServerSideProps } from 'next';
import axios from '../utils/axios';
import { IProduct } from '../Interface/product.interface';
import { FC } from 'react';

type PageProps = {
  products: IProduct[];
};

const Index: FC<PageProps> = ({ products }) => {
  return (
    <Box>
      <HomeBanner />
      <Carousel title='New Arrivals' products={products} />
      <PromoBanner />
      {/* <Carousel title='Best Sellers' products={products} /> */}
    </Box>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  try {
    const { data } = await axios.get<IProduct[]>('products');
    return {
      props: { products: data }, // will be passed to the page component as props
    };
  } catch (err) {
    return { notFound: true };
  }
}

export default Index;
