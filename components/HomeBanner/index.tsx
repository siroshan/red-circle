import Box from '@mui/material/Box';
import { FC, useState } from 'react';
import Image from 'next/image';
import BannerImg from '/public/banners/home.png';
import Typography from '@mui/material/Typography';

const HomeBanner: FC = () => {
  return (
    <div className='home-banner-wrap'>
      <div className='img-wrap'>
        <Image
          src={BannerImg}
          style={{ width: '100%', height: 'auto' }}
          priority
          alt='homer banner'
        />
      </div>
      <div>
        <Typography variant='h1' color='secondary' className='title'>
          In victory,
          <br /> you deserve champagne. <br />
          In defeat you need it.
        </Typography>

        <Typography variant='body1' className='description color-black'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
      </div>
    </div>
  );
};

export default HomeBanner;
