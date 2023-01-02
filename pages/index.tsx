import Box from '@mui/material/Box';
import Head from 'next/head';
import Image from 'next/image';
import HomeBanner from '../components/HomeBanner';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <Box>
      <HomeBanner />
      <Carousel title='New Arrivals'/>
    </Box>
  );
}
