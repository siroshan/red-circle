import { FC, useState } from 'react';
import Image from 'next/image';
import BannerImg from '/public/banners/promobanner.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MotionProps, motion } from 'framer-motion';

const PromoBanner: FC = () => {
  const textMProps: MotionProps = {
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
    },
  };
  const imgMProps: MotionProps = {
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
    },
  };
  return (
    <Box px={2} py={6} bgcolor='secondary.light'>
      <Box width={1} maxWidth={1280}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item md={6} sm={6} xs={12}>
            <motion.div {...textMProps}>
              <Typography
                variant='h1'
                mb={4}
                align='center'
                color='secondary'
                className='color-white'
              >
                INTUITION
              </Typography>
              <Typography
                align='justify'
                variant='body1'
                className='color-white'
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here, content here&apos;, making it look like
                readable English.
                <br /> <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here, content here&apos;, making it look like
                readable English.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <motion.div {...imgMProps}>
              <Image
                src={BannerImg}
                style={{ width: '100%', height: 'auto' }}
                priority
                alt='homer banner'
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PromoBanner;
