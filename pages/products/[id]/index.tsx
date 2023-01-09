import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import WineImg from '/public/products/wine.png';
import Button from '@mui/material/Button';
import ProductBanner from '../../../components/Banners/ProductBanner';
import Carousel from '../../../components/Carousel';

const Index = () => {
  return (
    <Box width={1} bgcolor='primary.light'>
      <Box maxWidth={1100} mx='auto' width={1} py={5} px={1}>
        <Grid container direction='row' alignItems='flex-start'>
          <Grid item xs={12} md={6}>
            <Image
              src={WineImg}
              style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
              priority
              alt='wine image'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textTransform='capitalize'
              className='color-navy-blue'
              fontSize={32}
            >
              Stars in the Dark
            </Typography>
            <Stack direction='row' alignItems='center'>
              <Typography
                color='secondary.light'
                variant='subtitle2'
                width={150}
              >
                Sparkling Wine
              </Typography>
              <Typography
                color='secondary.light'
                variant='subtitle2'
                width={150}
              >
                750ml
              </Typography>
            </Stack>
            <Typography color='common.black' mt={4}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.
            </Typography>
            <Typography variant='h4' color='secondary.light' my={4}>
              $12.80
            </Typography>
            <Button variant='contained' color='primary'>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ProductBanner />
      <Carousel title='Recommended Wines'/>
    </Box>
  );
};

export default Index;
