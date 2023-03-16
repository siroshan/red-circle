import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from '../../utils/axios';
import { GetServerSideProps } from 'next';
import { IProduct } from '../../Interface/product.interface';
import { FC, useEffect, useState } from 'react';
import CardContainer from '../../components/CardContainer';
import { useRouter } from 'next/router';
import ProductFilter from '../../components/ProductFilter';

type ProdSearchProps = {
  result: IProduct[];
  count: number;
};

const Index: FC<ProdSearchProps> = ({ result, count }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(result);
  const [productsCount, setProductsCount] = useState(count);
  const searchQuery = router.query.searchQuery;
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box maxWidth={1280} mx='auto' width={1}>
      <Typography
        variant='h4'
        color='secondary'
        my={5}
      >{`You searched for "${searchQuery}"`}</Typography>
      <ProductFilter
        setProducts={setProducts}
        searchQuery={searchQuery}
        setProductsCount={setProductsCount}
      />

      <CardContainer
        products={products}
        count={count}
        page={page}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default Index;

export async function getServerSideProps(context: GetServerSideProps) {
  const searchQuery = context.query.searchQuery;
  const {
    data: { result, count },
  } = await axios.get<{
    result: IProduct[];
    count: number;
  }>(`products/search?searchQuery=${searchQuery}&take=10&skip=0`);

  return {
    props: { result, count }, // will be passed to the page component as props
  };
}
