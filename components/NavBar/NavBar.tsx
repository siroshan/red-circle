import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useContext, useEffect, useState } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import SearchButton from './SearchButton';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import Cart from '../Icons/Cart';
import IconButton from '@mui/material/IconButton';
import axios from '../../utils/axios';
import { ICart } from '../../Interface/cart.interface';
import { CartContext } from '../../context/cartContext';

const NavBar = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const { cartItems } = useContext(CartContext);
  console.log('cart items', cartItems);

  return (
    <Box
      width={1}
      bgcolor='primary.dark'
      position='sticky'
      top={0}
      zIndex={100}
    >
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
          <Link className='link' href='/wines'>
            Wines
          </Link>
          <Link className='link' href='/our-story'>
            Our Story
          </Link>
          <SearchButton
            setIsSearchActive={setIsSearchActive}
            isSearchActive={isSearchActive}
          />
          <Box position='relative'>
            <Link href='/cart'>
              <IconButton>
                <ShoppingBagTwoToneIcon
                  className='color-black'
                  fontSize='large'
                />
                {cartItems && cartItems.length > 0 ? (
                  <Box
                    position='absolute'
                    right={5}
                    top={5}
                    width={20}
                    height={20}
                    fontWeight={600}
                    borderRadius='50%'
                    bgcolor='primary.light'
                    fontSize={12}
                    pt='2px'
                  >
                    {cartItems.length}
                  </Box>
                ) : null}
              </IconButton>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavBar;
