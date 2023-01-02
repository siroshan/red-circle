import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import SearchButton from './SearchButton';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import Cart from '../Icons/Cart';
import IconButton from '@mui/material/IconButton';

const NavBar = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  return (
    <Box width={1} bgcolor='primary.light'>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        mx='auto'
        maxWidth={1280}
      >
        <Logo />
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={3}
          maxWidth={300}
          width={1}
        >
          <Link href='/wines'>Wines</Link>
          <Link href='/our-story'>Our Story</Link>
          <SearchButton
            setIsSearchActive={setIsSearchActive}
            isSearchActive={isSearchActive}
          />
          <IconButton>
            <ShoppingBagTwoToneIcon className='color-black' fontSize='large' />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavBar;
