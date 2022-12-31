import { Box } from '@mui/material';
import axios from '../../utils/axios';
import { FC, useState } from 'react';
import { IProduct } from '../../Interface/product.interface';
import { axiosErrorHandler } from '../../utils/axiosErrorHandler';

const Carousel: FC = () => {
  const [produts, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get<IProduct[]>('products');
      setProducts(data);
    } catch (err) {
        axiosErrorHandler(err);
    }
  };
  return <Box className=''></Box>;
};

export default Carousel;