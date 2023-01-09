import Box from '@mui/material/Box';
import HomeBanner from '../components/Banners/HomeBanner';
import Carousel from '../components/Carousel';
import PromoBanner from '../components/Banners/PromoBanner';

export default function Home() {
  return (
    <Box>
      <HomeBanner />
      <Carousel title='New Arrivals' />
      <PromoBanner />
      <Carousel title='Best Sellers' />
    </Box>
  );
}
