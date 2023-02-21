import Box from '@mui/material/Box';
import LogoImg from '/public/logo.png';
import Image from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';

type LogoProps = {
  width?: number;
};

const Logo: FC<LogoProps> = ({ width = 100 }) => {
  return (
    <Box position='relative' width={width}>
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
