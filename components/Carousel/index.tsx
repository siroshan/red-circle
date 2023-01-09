import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import axios from '../../utils/axios';
import { FC, useRef, useState } from 'react';
import { IProduct } from '../../Interface/product.interface';
import { axiosErrorHandler } from '../../utils/axiosErrorHandler';
import ProductCard from '../ProductCard';

// Import Swiper React components
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type CarouselProps = {
  title: string;
};

const Carousel: FC<CarouselProps> = ({ title }) => {
  const [produts, setProducts] = useState<IProduct[]>([]);
  const getProducts = async () => {
    try {
      const { data } = await axios.get<IProduct[]>('products');
      setProducts(data);
    } catch (err) {
      axiosErrorHandler(err);
    }
  };

  const productArrray = [1, 2, 3, 4, 5];

  return (
    <Box width={1} bgcolor='primary.light' px={1}>
      <Box width={1} py={10} mx='auto' maxWidth={1100}>
        <Typography variant='h1' align='center' color='secondary' mb={10}>
          {title}
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {productArrray.map((prod, i) => (
            <SwiperSlide key={i}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Carousel;
