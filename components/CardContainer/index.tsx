import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { FC, useState } from 'react';
import { IProduct } from '../../Interface/product.interface';
import ProductCard from '../ProductCard';

type CardContainerProps = {
  products: IProduct[];
  count: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const CardContainer: FC<CardContainerProps> = ({
  products,
  count,
  page,
  handlePageChange,
}) => {
  return (
    <Box mt={12} maxWidth={1280} width={1} mx='auto'>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
      >
        {products.map((product, i) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} spacing={2} mb={2}>
            <Box mx='auto' width='fit-content'>
              <ProductCard product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box width='fit-content' mx='auto' my={4}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          shape='rounded'
        />
      </Box>
    </Box>
  );
};

export default CardContainer;
