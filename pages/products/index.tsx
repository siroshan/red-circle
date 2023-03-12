import Box from '@mui/material/Box';
import axios from '../../utils/axios';
import { GetServerSideProps } from 'next';
import { IProduct } from '../../Interface/product.interface';
import { FC, useState } from 'react';
import CardContainer from '../../components/CardContainer';

type ProdSearchProps = {
  products: IProduct[];
  count: number;
};

const Index: FC<ProdSearchProps> = ({ products, count }) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box>
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
    data: { products, count },
  } = await axios.get<{
    products: IProduct[];
    count: number;
  }>(`products/search?searchQuery${searchQuery}&take=10&skip=0`);

  return {
    props: { products, count }, // will be passed to the page component as props
  };
}
