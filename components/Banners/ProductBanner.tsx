import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProductBanner = () => {
  return (
    <div className='product-banner-wrap'>
      <div className='product-banner'>
        <Typography variant='h1' color='common.white' textAlign='center' my={5}>
          Stars in the Dark
        </Typography>
        <Typography
          fontSize={24}
          color='common.white'
          textAlign='justify'
          my={5}
          maxWidth={700}
          mx='auto'
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English.
        </Typography>
      </div>
    </div>
  );
};

export default ProductBanner;
