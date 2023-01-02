import Box from '@mui/material/Box';
import LogoImg from '/public/logo.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Box position='relative' width={100}>
      <Link href='/'>
        <Image
          src={LogoImg}
          style={{ width: '100%', height: 'auto' }}
          priority
          alt='red circle logo'
        />
      </Link>
    </Box>
  );
};

export default Logo;
