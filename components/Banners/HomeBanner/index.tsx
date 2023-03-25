import Box from '@mui/material/Box';
import { FC, useState } from 'react';
import Image from 'next/image';
import BannerImg from '/public/banners/home.png';
import Typography from '@mui/material/Typography';
import { motion, MotionProps } from 'framer-motion';

const HomeBanner: FC = () => {
  const h1MProps: MotionProps = {
    initial: {
      opacity: 0,
      x: 50,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 1.5,
    },
    viewport: {
      once: true,
    }
  };
  const imgMProps: MotionProps = {
    initial: {
      opacity: 0,
      x: -50,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 1.5,
    },
    viewport: {
      once: true,
    }
  };
  return (
    <div className='home-banner-wrap'>
      <motion.div className='img-wrap' {...imgMProps}>
        <Image
          src={BannerImg}
          style={{ width: '100%', height: 'auto' }}
          priority
          alt='homer banner'
        />
      </motion.div>
      <div>
        <motion.div {...h1MProps}>
          <Typography variant='h1' color='secondary' className='title'>
            {' '}
            In victory,
            <br /> you deserve champagne. <br />
            In defeat you need it.
          </Typography>
        </motion.div>

        <Typography
          variant='body1'
          align='justify'
          className='description color-black'
          px={2}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;, making it
          look like readable English.
        </Typography>
      </div>
    </div>
  );
};

export default HomeBanner;
